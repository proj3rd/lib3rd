import { Workbook } from 'exceljs';
import { getWorkbook } from '../../common/spreadsheet';
import { Definition } from './definition';

export class Definitions {
  public definitionList: Definition[];

  constructor(definitionList: Definition[]) {
    this.definitionList = definitionList;
  }

  public findDefinition(sectionNumberOrName: string): Definition | undefined {
    const definition = this.definitionList.find((def) => {
      return (
        def.sectionNumber === sectionNumberOrName ||
        def.name === sectionNumberOrName
      );
    });
    return definition;
  }

  public toSpreadsheet(): Workbook {
    const wb = getWorkbook();
    this.definitionList.forEach((def) => def.toSpreadsheet(wb));
    return wb;
  }
}
