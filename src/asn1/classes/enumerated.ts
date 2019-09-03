import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { fillRow, IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { Enumerations } from '../visitors/enumerations';
import { IModules } from '../visitors/modules';
import { AsnType } from './asnType';
import { IConstantAndModule } from './base';

export class Enumerated extends AsnType {
  public items: Enumerations;

  constructor(items: Enumerations) {
    super();

    this.items = items;
  }

  public setConstraint(constraint: ConstraintSpec): Enumerated {
    if (!isEmpty(constraint)) {
      log.warn(`Enumerated could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(asn1Pool: IModules, moduleName?: string): Enumerated {
    return this;
  }

  public depthMax(): number {
    return 0;
  }

  public replaceParameters(parameterMapping: {}): void {
    // Do nothing
  }

  public toString(): string {
    return `ENUMERATED {${this.items.join(', ')}}`;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth: number = 0): [number, number] {
    ieElem.type = this.toString();
    [row, col] = fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
    return [row, col];
  }
}
