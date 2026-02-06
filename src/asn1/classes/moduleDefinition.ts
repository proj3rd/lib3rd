import { Workbook } from 'exceljs';
import { unimpl } from '../../utils/unimpl';
import { getWorkbook } from '../../common/spreadsheet';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { indent } from '../formatter';
import { Assignment, AssignmentFromObject } from '../types/assignment';
import { Exports, ExportsFromObject } from '../types/exports';
import { ExtensionDefault, ExtensionDefaultFromObject } from '../types/extensionDefault';
import { TagDefault, TagDefaultFromObject } from '../types/tagDefault';
import { DefinitiveIdentification } from './definitiveIdentification';
import { Imports } from './imports';
import { ValueAssignment } from './valueAssignment';

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

  public moduleDefinitionTag = true;

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

  public static fromObject(obj: unknown): ModuleDefinition {
    const {
      name: nameObject,
      definitiveIdentification: definitiveIdentificationObject,
      tagDefault: tagDefaultObject,
      extensionDefault: extensionDefaultObject,
      exports: exportsObject,
      imports: importsObject,
      assignments: assignmentsObject,
      moduleDefinitionTag,
    } = obj as ModuleDefinition;
    if (!moduleDefinitionTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (typeof nameObject !== 'string' || !nameObject) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!(assignmentsObject instanceof Array)) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const definitiveIdentification = DefinitiveIdentification.fromObject(definitiveIdentificationObject);
    const tagDefault = TagDefaultFromObject(tagDefaultObject);
    const extensionDefault = ExtensionDefaultFromObject(extensionDefaultObject);
    const exports = exportsObject ? ExportsFromObject(exportsObject) : null;
    const imports = importsObject ? Imports.fromObject(importsObject) : null;
    const assignments = assignmentsObject.map((item) => AssignmentFromObject(item));
    return new ModuleDefinition(
      nameObject, definitiveIdentification, tagDefault, extensionDefault,
      { exports, imports, assignments },
    );
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
