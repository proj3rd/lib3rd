import { cloneDeep, isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { fillRow, IFormatConfig, IIe } from '../format/xlsx';
import { findDefinition } from '../utils';
import { ActualParameter } from '../visitors/actualParameter';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { AsnType } from './asnType';
import { Base, IConstantAndModule } from './base';
import { WithComponents } from './withComponents';

export class DefinedType extends AsnType {
  public moduleReference: string;
  public typeReference: string;
  public actualParameterList: ActualParameter[];
  public withComponents: WithComponents;

  public setConstraint(constraint: ConstraintSpec): DefinedType {
    if ('withComponents' in constraint) {
      this.withComponents = new WithComponents(constraint.withComponents);
      delete constraint.withComponents;
    }
    if (!isEmpty(constraint)) {
      log.warn(`DefinedType could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList: string[] = []): Base {
    if (parameterList.indexOf(this.typeReference) !== -1) {
      return this;
    }
    const definition = cloneDeep(findDefinition(this.typeReference, moduleName, asn1Pool));
    if (!definition) {
      return this;
    }
    const parameterMapping = {};
    if (definition.parameterList) {
      (definition.parameterList as string[]).forEach((parameter, index) => {
        /**
         * e.g. ElementTypeParam: DefinedType { typeReference: 'XXX' }
         * New parameter scope starts
         * This overwrites
         */
        parameterMapping[parameter] = this.actualParameterList[index];
      });
    }
    if (!(definition instanceof DefinedType)) {
      Object.assign(definition, {
        moduleReference: this.moduleReference,
        typeReference: `${this.toString()}`,
      });
    }
    definition.replaceParameters(parameterMapping);
    definition.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
    return definition;
  }

  public depthMax(): number {
    return 0;
  }

  public replaceParameters(parameterMapping: {}): void {
    if (!this.moduleReference && this.typeReference && this.typeReference in parameterMapping) {
      Object.assign(this, parameterMapping[this.typeReference]);
    }
  }

  public toString(): string {
    const actualParameterListString = this.getActualParameterListString();
    const withComponents = !this.withComponents ? '' :
      ` (WITH COMPONENTS ${this.withComponents.toString()}`;
    return `${this.moduleReference ? this.moduleReference + '.' : ''}` +
      `${this.typeReference}${actualParameterListString}${withComponents}`;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth: number = 0): [number, number] {
    ieElem.reference = this.toString();
    [row, col] = fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
    return [row, col];
  }

  private getActualParameterListString(): string {
    return !this.actualParameterList ? '' :
      ` { ${this.actualParameterList.map((item) => item.toString()).join(', ')} }`;
  }
}
