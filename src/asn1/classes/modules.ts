import { Workbook } from 'exceljs';
import { getWorkbook } from '../../common/spreadsheet';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { Assignment } from '../types/assignment';
import { ModuleDefinition } from './moduleDefinition';

export class Modules {
  public modules: ModuleDefinition[];

  public modulesTag = true;

  constructor(modules: ModuleDefinition[] = []) {
    this.modules = modules;
  }

  public static deserialize(serialized: string) {
    const { modules: moduleObjectList, modulesTag } = JSON.parse(serialized) as Modules;
    if (!modulesTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!(moduleObjectList instanceof Array)) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const modules = moduleObjectList.map((moduleObject) => {
      return ModuleDefinition.fromObject(moduleObject);
    });
    return new Modules(modules);
  }

  public findAssignment(
    name: string,
    moduleName?: string,
  ): Assignment | undefined {
    let assignment: Assignment | undefined;
    this.modules.filter((module) => {
      if (moduleName === undefined) {
        return true;
      }
      return module.name === moduleName;
    }).forEach((module) => {
      if (assignment !== undefined) {
        return;
      }
      assignment = module.findAssignment(name);
    });
    return assignment;
  }

  public toSpreadsheet(): Workbook {
    const workbook = getWorkbook();
    this.modules.forEach((module) => module.toSpreadsheet(workbook));
    return workbook;
  }

  public toString(): string {
    return this.modules.map((module) => module.toString()).join('\n\n');
  }
}
