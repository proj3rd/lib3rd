import { Workbook } from 'exceljs';
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
