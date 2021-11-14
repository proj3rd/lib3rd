import { Workbook } from 'exceljs';
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
import { MSG_ERR_L3_TABULAR_MALFORMED_SERIALIZATION } from '../constants';
import { IDefinition, IInformationElement } from '../types';

const HEADER_IEI = 'IEI';
const HEADER_INFORMATION_ELEMENT = 'Information Element';
const HEADER_TYPE_REFERENCE = 'Type / Reference';
const HEADER_PRESENCE = 'Presence';
const HEADER_FORMAT = 'Format';
const HEADER_LENGTH = 'Length';

const HEADER_LIST = [
  HEADER_IEI,
  HEADER_INFORMATION_ELEMENT,
  HEADER_TYPE_REFERENCE,
  HEADER_PRESENCE,
  HEADER_FORMAT,
  HEADER_LENGTH,
];

export class Definition {
  public sectionNumber: string;
  public name: string;
  public descriptionList: string[];
  public messageType: string;
  public significance: string;
  public direction: string;
  public elementList: IInformationElement[];
  // TODO: octet structure for IE;
  // TODO: CSN.1 structure

  constructor(definition: IDefinition) {
    const {
      sectionNumber,
      name,
      descriptionList,
      messageType,
      significance,
      direction,
      elementList,
    } = definition;
    this.sectionNumber = sectionNumber;
    this.name = name;
    this.descriptionList = descriptionList;
    this.messageType = messageType;
    this.significance = significance;
    this.direction = direction;
    this.elementList = elementList;
  }

  public static fromObject(obj: unknown): Definition {
    const {
      sectionNumber,
      name,
      descriptionList: descriptionListObj,
      messageType,
      significance,
      direction,
      elementList: elementListObj,
    } = obj as Definition;
    if (
      !sectionNumber || typeof sectionNumber !== 'string'
      || !name || typeof name !== 'string'
      || typeof messageType !== 'string'
      || typeof significance !== 'string'
      || typeof direction !== 'string'
      || !(elementListObj instanceof Array)
    ) {
      throw Error(MSG_ERR_L3_TABULAR_MALFORMED_SERIALIZATION);
    }
    // TODO
    const descriptionList = descriptionListObj.map((descriptionObj) => {
      if (typeof descriptionObj !== 'string') {
        throw Error(MSG_ERR_L3_TABULAR_MALFORMED_SERIALIZATION);
      };
      return descriptionObj;
    });
    return new Definition({ sectionNumber, name, descriptionList, messageType, significance, direction, elementList: elementListObj, });
  }
}
