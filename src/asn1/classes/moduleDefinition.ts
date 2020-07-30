import { unimpl } from 'unimpl';
import { indent } from '../formatter';
import { AsnSymbol } from './asnSymbol';
import { Assignment } from './assignment';
import { DefinitiveIdentification } from './definitiveIdentification';
import { Imports } from './imports';

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
    moduleBody: IModuleBody
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

export type TagDefault =
  | 'EXPLICIT TAGS'
  | 'IMPLICIT TAGS'
  | 'AUTOMATIC TAGS'
  | '';

export type ExtensionDefault = 'EXTENSIBILITY IMPLIED' | '';

/**
 * This is intermediate interface used by a `ModuleBodyVisitor`
 */
export interface IModuleBody {
  exports: Exports | null;
  imports: Imports | null;
  assignments: Assignment[];
}

export type Exports = 'ALL' | AsnSymbol[];
