import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { fillRow, IFormatConfig, IIe } from '../format/xlsx';
import { BuiltinValue } from '../visitors/builtinValue';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { AsnType } from './asnType';
import { IConstantAndModule } from './base';

export class OctetString extends AsnType {
  public size: BuiltinValue;
  public sizeMin: BuiltinValue;
  public sizeMax: BuiltinValue;
  public containing: AsnType;

  public setConstraint(constraint: ConstraintSpec): OctetString {
    if ('value' in constraint) {
      this.size = constraint.value;
      delete constraint.value;
      this.sizeMin = undefined;
      this.sizeMax = undefined;
    }
    if ('min' in constraint && 'max' in constraint) {
      this.sizeMin = constraint.min;
      delete constraint.min;
      this.sizeMax = constraint.max;
      delete constraint.max;
      this.size = undefined;
    }
    if ('containing' in constraint) {
      this.containing = constraint.containing;
      delete constraint.containing;
    }
    if (!isEmpty(constraint)) {
      log.warn(`OctetStringType could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(asn1Pool: IModules, moduleName?: string): OctetString {
    return this;
  }

  public depthMax(): number {
    return 0;
  }

  public replaceParameters(paramterMapping: {}): void {
    // Do nothing
  }

  public toString(): string {
    const containing = this.containing ? ` (CONTAINING ${this.containing.toString()})` : '';
    const size = this.size !== undefined ? ` (SIZE (${this.size}))` :
    this.sizeMin !== undefined && this.sizeMax !== undefined ? ` (SIZE (${this.sizeMin}..${this.sizeMax}))` : '';
    return `OCTET STRING${containing}${size}`;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth: number = 0): [number, number] {
    ieElem.type = this.toString();
    [row, col] = fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
    this.addToConstants(this.size, constants);
    this.addToConstants(this.sizeMin, constants);
    this.addToConstants(this.sizeMax, constants);
    return [row, col];
  }
}
