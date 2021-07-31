import { Workbook } from 'exceljs';
import { getWorkbook } from '../../common/spreadsheet';
import { Definition } from './definition';

function validateDefinition(item: unknown): boolean {
  const { sectionNumber, name, elementList, rangeBounds, conditions } = item as Definition;
  if (!sectionNumber || typeof sectionNumber !== 'string') {
    return false;
  }
  if (!name || typeof name !== 'string') {
    return false;
  }
  if (!(elementList instanceof Array)) {
    return false;
  }
  // TODO: Need to validate elementList, rangeBounds and conditions?
  return true;
}

export class Definitions {
  public definitionList: Definition[];

  constructor(definitionList: Definition[]) {
    this.definitionList = definitionList;
  }

  public static fromObject(obj: unknown) {
    const { definitionList: definitionListObj } = obj as Definitions;
    if (!definitionListObj) {
      throw Error('Malformed serialization of RAN3 tabular form');
    }
    if (!(definitionListObj instanceof Array)) {
      throw Error('Malformed serialization of RAN3 tabular form');
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

  public toSpreadsheet(): Workbook {
    const wb = getWorkbook();
    this.definitionList.forEach((def) => def.toSpreadsheet(wb));
    return wb;
  }
}
