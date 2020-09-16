import { Workbook } from 'exceljs';
import { unimpl } from 'unimpl';
import { getWorkbook } from '../../common/spreadsheet';
import { Assignment } from '../types';
import { ModuleDefinition } from './moduleDefinition';

export class Modules {
  public modules: ModuleDefinition[];

  private modulesTag: undefined;

  constructor(modules: ModuleDefinition[] = []) {
    this.modules = modules;
  }

  public findAssignment(
    name: string,
    moduleName?: string
  ): Assignment | undefined {
    let assignment: Assignment | undefined;
    if (moduleName !== undefined) {
      return unimpl();
    }
    this.modules.forEach((module) => {
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
