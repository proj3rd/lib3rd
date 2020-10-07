import { Worksheet } from 'exceljs';
import { cloneDeep, isEqual } from 'lodash';
import { unimpl } from 'unimpl';
import { setOutlineLevel, IRowInput, drawBorder } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { HEADER_REFERENCE } from '../formatter/spreadsheet';
import { AsnType } from './asnType';
import { Constraint } from './constraint';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
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

  /**
   * Find an Assignment indicated by ExternalTypeReference and
   * returns an expanded copy of it.
   * @param modules
   * @param parameterMappings
   */
  // eslint-disable-next-line no-unused-vars
  public expand(modules: Modules, parameterMappings: IParameterMapping[]): AsnType {
    const referencedAssignment = modules.findAssignment(
      this.typeReference,
      this.moduleReference,
    );
    if (referencedAssignment === undefined) {
      return this;
    } if (referencedAssignment instanceof TypeAssignment) {
      const { asnType } = referencedAssignment;
      const expandedType = cloneDeep(asnType).expand(modules, []);
      if (asnType instanceof ObjectSet) {
        return unimpl();
      }
      if (isEqual(expandedType, asnType)) {
        return asnType;
      }
      if (expandedType instanceof ObjectSet) {
        return unimpl();
      }
      return expandedType;
    } if (referencedAssignment instanceof ParameterizedTypeAssignment) {
      return unimpl();
    } if (referencedAssignment instanceof ValueAssignment) {
      return unimpl();
    }
    throw Error();
  }

  // eslint-disable-next-line class-methods-use-this
  public getDepth(): number {
    return 0;
  }

  // eslint-disable-next-line class-methods-use-this
  public setConstraints(constraints: Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    // eslint-disable-next-line no-param-reassign
    row[HEADER_REFERENCE] = this.toString();
    const r = worksheet.addRow(row);
    setOutlineLevel(r, depth);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    return `${this.moduleReference}.${this.typeReference}`;
  }
}
