import { Workbook } from 'exceljs';
import { unimpl } from 'unimpl';
import { getWorkbook } from '../../common/spreadsheet';
import { indent } from '../formatter';
import { Assignment } from '../types';
import { AsnSymbol } from './asnSymbol';
import { DefinitiveIdentification } from './definitiveIdentification';
import { Imports } from './imports';
import { ValueAssignment } from './valueAssignment';

export type TagDefault =
  | 'EXPLICIT TAGS'
  | 'IMPLICIT TAGS'
  | 'AUTOMATIC TAGS'
  | '';

export type ExtensionDefault = 'EXTENSIBILITY IMPLIED' | '';

export type Exports = 'ALL' | AsnSymbol[];

/**
 * This is intermediate interface used by a `ModuleBodyVisitor`
 */
export interface IModuleBody {
  exports: Exports | null;
  imports: Imports | null;
  assignments: Assignment[];
}

export class ModuleDefinition implements IModuleBody {
  public name: string;
  public definitiveIdentification: DefinitiveIdentification;
  public tagDefault: TagDefault;
  public extensionDefault: ExtensionDefault;
  public exports: Exports | null;
  public imports: Imports | null;
  public assignments: Assignment[];

  private moduleDefinitionTag: undefined;

  constructor(
    name: string,
    definitiveIdentification: DefinitiveIdentification,
    tagDefault: TagDefault,
    extensionDefault: ExtensionDefault,
    moduleBody: IModuleBody,
  ) {
    this.name = name;
    this.definitiveIdentification = definitiveIdentification;
    this.tagDefault = tagDefault;
    this.extensionDefault = extensionDefault;
    const { exports, imports, assignments } = moduleBody;
    this.exports = exports;
    this.imports = imports;
    this.assignments = assignments;
  }

  public findAssignment(name: string): Assignment | undefined {
    return this.assignments.find((assignment) => assignment.name === name);
  }

  public toSpreadsheet(workbook?: Workbook): Workbook {
    const wb = getWorkbook(workbook);
    this.assignments.forEach((assignment) => {
      if (assignment instanceof ValueAssignment) {
        return;
      }
      assignment.toSpreadsheet(wb);
    });
    return wb;
  }

  public toString(): string {
    const headerString = [
      this.name,
      this.definitiveIdentification.toString(),
      `DEFINITIONS ${this.tagDefault} ${this.extensionDefault} ::=`,
      'BEGIN',
    ].join('\n');
    const arrToString: string[] = [headerString];
    if (this.exports !== null) {
      return unimpl();
    }
    if (this.imports !== null) {
      arrToString.push(indent(this.imports.toString()));
    }
    const assignmentsString = this.assignments
      .map((assignment) => assignment.toString())
      .join('\n\n');
    arrToString.push(indent(assignmentsString));
    arrToString.push('END');
    return arrToString.join('\n\n');
  }
}
