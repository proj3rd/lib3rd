import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { fillRow, IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { AsnType } from './asnType';
import { IConstantAndModule } from './base';

export class AsnBoolean extends AsnType {
  public setConstraint(constraint: ConstraintSpec): AsnBoolean {
    if (!isEmpty(constraint)) {
      log.warn(`Boolean could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(asn1Pool: IModules, moduleName?: string): AsnBoolean {
    return this;
  }

  public depthMax(): number {
    return 0;
  }

  public replaceParameters(parameterMapping: {}): void {
    // Do nothing
  }

  public toString(): string {
    return 'BOOLEAN';
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth: number = 0): [number, number] {
    ieElem.type = 'BOOLEAN';
    [row, col] = fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
    return [row, col];
  }
}
