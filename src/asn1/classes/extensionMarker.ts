import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { fillRow, IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';

export class ExtensionMarker extends Base {
  public setConstraint(constraint: any): ExtensionMarker {
    if (!isEmpty(constraint)) {
      log.warn(`ExtensionMarker could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): ExtensionMarker {
    return this;
  }

  public depthMax(): number {
    return 0;
  }

  public toString(): string {
    return '...';
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[],
                       formatConfig: IFormatConfig, depth: number = 0): [number, number] {
    ieElem.ie = '...';
    [row, col] = fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
    return [row, col];
  }
}
