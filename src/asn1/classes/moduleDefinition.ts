import { AsnSymbol } from './asnSymbol';
import { Assignment } from './assignment';
import { Imports } from './imports';

export class ModuleDefinition implements IModuleBody {
  public name: string;
  public tagDefault: TagDefault;
  public extensionDefault: ExtensionDefault;
  public exports: Exports | null;
  public imports: Imports | null;
  public assignments: Assignment[] | null;

  private moduleDefinitionTag: undefined;

  constructor(
    name: string,
    tagDefault: TagDefault,
    extensionDefault: ExtensionDefault,
    moduleBody: IModuleBody
  ) {
    this.name = name;
    this.tagDefault = tagDefault;
    this.extensionDefault = extensionDefault;
    const { exports, imports, assignments } = moduleBody;
    this.exports = exports;
    this.imports = imports;
    this.assignments = assignments;
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
  assignments: Assignment[] | null;
}

export type Exports = 'ALL' | AsnSymbol[];
