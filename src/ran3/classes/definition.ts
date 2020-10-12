import { Workbook } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { HEADER_REFERENCE, HEADER_TYPE } from '../../asn1/formatter/spreadsheet';
import {
  addHeader,
  addTitle,
  addWorksheet,
  drawBorder,
  getWorkbook,
  headerIndexed,
  IRowInput,
  setOutlineLevel,
  uniqueSheetname,
} from '../../common/spreadsheet';
import { BorderTop } from '../../common/spreadsheet/style';
import { reSectionNumber } from '../parse';
import { IDefinition, IInformationElement } from '../types';
import { Conditions } from './conditions';
import { Definitions } from './definitions';
import { RangeBounds } from './rangeBounds';

export const HEADER_NAME_BASE = 'IE/Group Name';
const HEADER_PRESENCE = 'Presence';
const HEADER_RANGE = 'Range';
export const HEADER_DESCRIPTION = 'Semantics description';
const HEADER_CRITICALITY = 'Criticality';
const HEADER_ASSIGNED_CRITICALITY = 'Assigned Criticality';

const HEADER_LIST = [
  HEADER_NAME_BASE,
  HEADER_PRESENCE,
  HEADER_RANGE,
  HEADER_REFERENCE,
  HEADER_TYPE,
  HEADER_DESCRIPTION,
  HEADER_CRITICALITY,
  HEADER_ASSIGNED_CRITICALITY,
];

// eslint-disable-next-line no-use-before-define
function canMerge(parent: IInformationElement, child: Definition): boolean {
  if (!child.hasSingleRoot()) {
    return false;
  }
  const { elementList } = child;
  const firstElement = elementList[0];
  if (
    parent.presence !== '' && parent.presence !== 'M' && parent.presence !== 'O'
    && firstElement.presence !== '' && firstElement.presence !== 'M' && firstElement.presence !== 'O'
    && parent.presence !== firstElement.presence
  ) {
    return false;
  }
  if (parent.range !== '' && firstElement.range !== '') {
    return false;
  }
  if (
    parent.criticality !== '' && firstElement.criticality !== ''
    && parent.criticality !== firstElement.criticality
  ) {
    return false;
  }
  if (
    parent.assignedCriticality !== '' && firstElement.assignedCriticality !== ''
    && parent.assignedCriticality !== firstElement.assignedCriticality
  ) {
    return false;
  }
  return true;
}

function merge(parent: IInformationElement, child: IInformationElement) {
  if (child.name.toUpperCase().startsWith('CHOICE')) {
    // eslint-disable-next-line no-param-reassign
    parent.name = `CHOICE ${parent.name}`;
  }
  if (parent.presence === 'O' || child.presence === 'O') {
    // eslint-disable-next-line no-param-reassign
    parent.presence = 'O';
  } else {
    // eslint-disable-next-line no-param-reassign
    parent.presence = parent.presence || child.presence;
  }
  if (child.type !== '') {
    // eslint-disable-next-line no-param-reassign
    parent.type = child.type;
  }
  // eslint-disable-next-line no-param-reassign
  parent.description = `${parent.description}

${child.description}`;
}

export class Definition {
  public sectionNumber: string;
  public name: string;
  public descriptionList: string[];
  public direction: string;
  public elementList: IInformationElement[];
  public rangeBounds: RangeBounds;
  public conditions: Conditions;

  constructor(definition: IDefinition) {
    const {
      sectionNumber,
      name,
      descriptionList,
      direction,
      elementList,
      rangeBoundList,
      conditionList,
    } = definition;
    this.sectionNumber = sectionNumber;
    this.name = name;
    this.descriptionList = descriptionList;
    this.direction = direction;
    this.elementList = elementList;
    this.rangeBounds = new RangeBounds(rangeBoundList);
    this.conditions = new Conditions(conditionList);
  }

  /**
   * Expand `elementList`, `rangeBounds` and `condition`. This will mutate the object itself.
   */
  public expand(definitions: Definitions): Definition {
    const elementListExpanded = cloneDeep(this.elementList);
    const rangeBoundsExpanded = cloneDeep(this.rangeBounds);
    const conditionsExpanded = cloneDeep(this.conditions);
    // tslint:disable-next-line: prefer-for-of
    for (let i = elementListExpanded.length - 1; i >= 0; i -= 1) {
      const element = elementListExpanded[i];
      const { reference } = element;
      const matchResult = reference.match(reSectionNumber);
      if (matchResult) {
        const sectionNumber = matchResult[0];
        const definitionReferenced = definitions.findDefinition(sectionNumber);
        if (definitionReferenced) {
          const definitionExpanded = cloneDeep(definitionReferenced).expand(
            definitions,
          );
          const {
            elementList: elementListReferenced,
            rangeBounds: rangeBoundsReferenced,
            conditions: conditionsReferenced,
          } = definitionExpanded;
          if (canMerge(elementListExpanded[i], definitionExpanded)) {
            elementListReferenced.forEach((elementReferenced) => {
              // eslint-disable-next-line no-param-reassign
              elementReferenced.depth += element.depth;
            });
            merge(elementListExpanded[i], elementListReferenced[0]);
            elementListExpanded.splice(i + 1, 0, ...elementListReferenced.slice(1));
          } else {
            elementListReferenced.forEach((elementReferenced) => {
              // eslint-disable-next-line no-param-reassign
              elementReferenced.depth += element.depth + 1;
            });
            elementListExpanded.splice(i + 1, 0, ...elementListReferenced);
          }
          if (!isEqual(elementListExpanded, this.elementList)) {
            this.elementList = elementListExpanded;
          }
          rangeBoundsReferenced.rangeBoundList.forEach((rangeBound) => {
            rangeBoundsExpanded.add(rangeBound);
          });
          conditionsReferenced.conditionList.forEach((condition) => {
            conditionsExpanded.add(condition);
          });
        }
      }
    }
    if (!isEqual(rangeBoundsExpanded, this.rangeBounds)) {
      this.rangeBounds = rangeBoundsExpanded;
    }
    if (!isEqual(conditionsExpanded, this.conditions)) {
      this.conditions = conditionsExpanded;
    }
    return this;
  }

  public getDepth(): number {
    return this.elementList.reduce((prev, curr) => Math.max(prev, curr.depth), 0);
  }

  public hasSingleRoot(): boolean {
    if (this.elementList.length === 0) {
      return false;
    }
    const depthAndCount = this.elementList.reduce((prev, curr) => {
      if (curr.depth < prev.depth) {
        return {
          depth: curr.depth,
          count: 1,
        };
      }
      if (curr.depth === prev.depth) {
        return {
          depth: prev.depth,
          count: prev.count + 1,
        };
      }
      return prev;
    }, { depth: Infinity, count: 0 });
    return depthAndCount.count === 1;
  }

  public toSpreadsheet(workbook?: Workbook): Workbook {
    const wb = getWorkbook(workbook);
    const sheetname = uniqueSheetname(wb, `${this.sectionNumber} ${this.name}`);
    const ws = addWorksheet(wb, sheetname, 5);
    const depth = this.getDepth();
    addTitle(ws, this.name);
    ws.addRow([this.descriptionList.join('\n')]);
    ws.addRow([this.direction]);
    ws.addRow([]);
    addHeader(ws, HEADER_LIST, depth);
    this.elementList.forEach((element) => {
      const {
        name,
        presence,
        range,
        reference,
        type,
        description,
        criticality,
        assignedCriticality,
        depth: depthElement,
      } = element;
      const rowInput: IRowInput = {
        [headerIndexed(HEADER_NAME_BASE, depthElement)]: name,
        [HEADER_PRESENCE]: presence,
        [HEADER_RANGE]: range,
        [HEADER_REFERENCE]: reference,
        [HEADER_TYPE]: type,
        [HEADER_DESCRIPTION]: description,
        [HEADER_CRITICALITY]: criticality,
        [HEADER_ASSIGNED_CRITICALITY]: assignedCriticality,
      };
      const r = ws.addRow(rowInput);
      setOutlineLevel(r, depthElement);
      drawBorder(ws, r, depthElement);
    });
    drawBorder(ws, ws.addRow([]), 0, BorderTop);
    this.conditions.toSpreadsheet(ws);
    this.rangeBounds.toSpreadsheet(ws);
    return wb;
  }
}
