import { Workbook } from 'exceljs';
import { getWorkbook } from '../../common/spreadsheet';
import { MSG_ERR_L3_TABULAR_MALFORMED_SERIALIZATION } from '../constants';
import { Definition } from './definition';

export class Definitions {
  public definitionList: Definition[];

  constructor(definitionList: Definition[]) {
    this.definitionList = definitionList;
  }

  public static fromObject(obj: unknown) {
    const { definitionList: definitionListObj } = obj as Definitions;
    if (!definitionListObj) {
      throw Error(MSG_ERR_L3_TABULAR_MALFORMED_SERIALIZATION);
    }
    if (!(definitionListObj instanceof Array)) {
      throw Error(MSG_ERR_L3_TABULAR_MALFORMED_SERIALIZATION);
    }
    const definitionList = definitionListObj.map((definitionObj) => Definition.fromObject(definitionObj));
    return new Definitions(definitionList);
  }

  public findDefinition(sectionNumberOrName: string): Definition | undefined {
    const definition = this.definitionList.find((def) => (
      def.sectionNumber === sectionNumberOrName
        || def.name === sectionNumberOrName
    ));
    return definition;
  }
}
