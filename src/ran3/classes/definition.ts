import { Workbook } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { todo } from 'unimpl';
import {
  addHeader,
  addTitle,
  addWorksheet,
  drawBorder,
  getWorkbook,
  headerIndexed,
  IRowInput,
  setOutlineLevel,
} from '../../common/spreadsheet';
import { BorderTop } from '../../common/spreadsheet/style';
import { IDefinition, IInformationElement } from '../types';
import { Conditions } from './conditions';
import { Definitions } from './definitions';
import { RangeBounds } from './rangeBounds';

export const HEADER_NAME_BASE = 'IE/Group Name';
const HEADER_PRESENCE = 'Presence';
const HEADER_RANGE = 'Range';
const HEADER_TYPE_AND_REF = 'IE type and reference';
export const HEADER_DESCRIPTION = 'Semantics description';
const HEADER_CRITICALITY = 'Criticality';
const HEADER_ASSIGNED_CRITICALITY = 'Assigned Criticality';

const HEADER_LIST = [
  HEADER_NAME_BASE,
  HEADER_PRESENCE,
  HEADER_RANGE,
  HEADER_TYPE_AND_REF,
  HEADER_DESCRIPTION,
  HEADER_CRITICALITY,
  HEADER_ASSIGNED_CRITICALITY,
];

/**
 * Regular expression for section number. Following expressions are supported
 * - 9.1.2.3
 * - 9.1.2.3a
 * - A.1.2.3
 * - A.1.2.3a
 */
const reSectionNumber = /\b[1-9A-Z]\d*?(\.[1-9]\d*?)*\.[1-9]\w*?\b/;
//                         ^ Head      ^ Middle        ^ Tail

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
    for (let i = elementListExpanded.length - 1; i >= 0; i--) {
      const element = elementListExpanded[i];
      const { typeAndRef } = element;
      const matchResult = typeAndRef.match(reSectionNumber);
      if (!matchResult) {
        continue;
      }
      const sectionNumber = matchResult[0];
      const definitionReferenced = definitions.findDefinition(sectionNumber);
      if (!definitionReferenced) {
        continue;
      }
      const definitionExpanded = cloneDeep(definitionReferenced).expand(
        definitions
      );
      const {
        elementList: elementListReferenced,
        rangeBounds: rangeBoundsReferenced,
        conditions: conditionsReferenced,
      } = definitionExpanded;
      // TODO: Check single-rooted
      elementListReferenced.forEach((elementReferenced) => {
        elementReferenced.depth += element.depth + 1;
      });
      elementListExpanded.splice(i + 1, 0, ...elementListReferenced);
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
    if (!isEqual(rangeBoundsExpanded, this.rangeBounds)) {
      this.rangeBounds = rangeBoundsExpanded;
    }
    if (!isEqual(conditionsExpanded, this.conditions)) {
      this.conditions = conditionsExpanded;
    }
    return this;
  }

  public getDepth(): number {
    return this.elementList.reduce((prev, curr) => {
      return Math.max(prev, curr.depth);
    }, 0);
  }

  public toSpreadsheet(workbook?: Workbook): Workbook {
    const wb = getWorkbook(workbook);
    const sheetname = `${this.sectionNumber} ${this.name}`.substring(0, 31);
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
        typeAndRef,
        description,
        criticality,
        assignedCriticality,
        depth,
      } = element;
      const rowInput: IRowInput = {
        [headerIndexed(HEADER_NAME_BASE, depth)]: name,
        [HEADER_PRESENCE]: presence,
        [HEADER_RANGE]: range,
        [HEADER_TYPE_AND_REF]: typeAndRef,
        [HEADER_DESCRIPTION]: description,
        [HEADER_CRITICALITY]: criticality,
        [HEADER_ASSIGNED_CRITICALITY]: assignedCriticality,
      };
      const r = ws.addRow(rowInput);
      setOutlineLevel(r, depth);
      drawBorder(ws, r, depth);
    });
    drawBorder(ws, ws.addRow([]), 0, BorderTop);
    this.conditions.toSpreadsheet(ws);
    this.rangeBounds.toSpreadsheet(ws);
    return wb;
  }
}
