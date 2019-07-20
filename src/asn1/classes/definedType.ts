import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { fillRow, IFormatConfig, IIe } from '../format/xlsx';
import { findDefinition } from '../utils';
import { Base } from './base';
import { WithComponents } from './withComponents';

export class DefinedType extends Base {
  public moduleReference: string;
  public typeReference: string;
  public actualParameterList: any/* TODO */[];
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

  public expand(asn1Pool: any /* TODO*/, moduleName?: string, parameterList: string[] = []): Base {
    if (parameterList.indexOf(this.typeReference) !== -1) {
      return this;
    }
    const definition = findDefinition(this.typeReference, moduleName, asn1Pool);
    if (!definition) {
      return this;
    }
    Object.assign(definition, {moduleReference: this.moduleReference, typeReference: this.typeReference});
    definition.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
    return definition;
  }

  public depthMax(): number {
    return 0;
  }

  public toString(): string {
    const actualParameterListString = !this.actualParameterList ? '' :
      ` { ${this.actualParameterList.map((item) => item.toString()).join(', ')} }`;
    const withComponents = !this.withComponents ? '' :
      ` (WITH COMPONENTS ${this.withComponents.toString()}`;
    return `${this.moduleReference ? this.moduleReference + '.' : ''}` +
      `${this.typeReference}${actualParameterListString}${withComponents}`;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[],
                       formatConfig: IFormatConfig, depth: number = 0): [number, number] {
    ieElem.reference = this.toString();
    [row, col] = fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
    return [row, col];
  }
}
