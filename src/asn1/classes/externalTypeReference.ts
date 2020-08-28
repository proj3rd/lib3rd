import { Worksheet } from 'exceljs';
import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import {
  HEADER_REFERENCE,
  IRowInput,
  drawBorder,
} from '../formatter/spreadsheet';
import { AsnType } from './asnType';
import { Constraint } from './constraint';
import { Modules } from './modules';
import { ParameterizedTypeAssignment } from './parameterizedTypeAssignment';
import { TypeAssignment } from './typeAssignment';
import { ValueAssignment } from './valueAssignment';

export class ExternalTypeReference {
  public moduleReference: string;
  public typeReference: string;

  private externalTypeReferenceTag: undefined;

  constructor(moduleReference: string, typeReference: string) {
    this.moduleReference = moduleReference;
    this.typeReference = typeReference;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): AsnType {
    const referencedAssignment = modules.findAssignment(
      this.typeReference,
      this.moduleReference
    );
    if (referencedAssignment === undefined) {
      return this;
    } else if (referencedAssignment instanceof TypeAssignment) {
      const { asnType } = referencedAssignment;
      const expandedType = asnType.expand(modules, []);
      return expandedType;
    } else if (referencedAssignment instanceof ParameterizedTypeAssignment) {
      return unimpl();
    } else if (referencedAssignment instanceof ValueAssignment) {
      return unimpl();
    }
    throw Error();
  }

  public getDepth(): number {
    return 0;
  }

  public setConstraints(constraints: Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    row[HEADER_REFERENCE] = this.toString();
    const r = worksheet.addRow(row);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    return `${this.moduleReference}.${this.typeReference}`;
  }
}
