import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { fillRow, IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';
import { WithComponents } from './withComponents';

export class DefinedType extends Base {
  public moduleReference: string;
  public typeReference: string;
  public withComponents: WithComponents;

  public setConstraint(constraint: any): DefinedType {
    if ('withComponents' in constraint) {
      this.withComponents = new WithComponents(constraint.withComponents);
      delete constraint.withComponents;
    }
    if (!isEmpty(constraint)) {
      log.warn(`DefinedType could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): DefinedType {
    // TODO
    return this;
  }

  public depthMax(): number {
    return 1;
  }

  public toString(): string {
    const withComponents = !this.withComponents ? '' :
      ` (WITH COMPONENTS ${this.withComponents.toString()}`;
    return `${this.moduleReference ? this.moduleReference + '.' : ''}${this.typeReference}${withComponents}`;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[],
                       formatConfig: IFormatConfig, depth: number = 0): [number, number] {
    ieElem.reference = this.toString();
    [row, col] = fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
    return [row, col];
  }
}
