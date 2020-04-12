import * as colors from 'colors';
import { cloneDeep, isEqual } from 'lodash';

import { fillRow, IFormatConfig, IIe } from '../format/xlsx';
import { findDefinition } from '../utils';
import { ActualParameter } from '../visitors/actualParameter';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { AsnType } from './asnType';
import { Base, IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { ObjectIdentifierValue } from './objectIdentifierValue';
import { Parameter } from './parameter';
import { WithComponents } from './withComponents';

export interface IParameterMapping {
  parameter: Parameter;
  actualParameter: ActualParameter;
}

export class DefinedType extends AsnType {
  public moduleReference: string;
  public typeReference: string;
  public actualParameterList: ActualParameter[];
  public withComponents: WithComponents;

  public setConstraint(constraints: Array<Constraint | ConstraintSpec>): DefinedType {
    this.constraints = constraints;
    return this;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList: Parameter[] = []): Base {
    console.log(colors.blue(__filename), 'expand()');
    console.log(colors.yellow('Current IE'), `(type: ${this.constructor.name})`);
    console.log(JSON.stringify(this, null, 2));
    if (parameterList.findIndex((value) => isEqual(value, this.typeReference)) !== -1) {
      return this;
    }
    const definition = cloneDeep(findDefinition(this.typeReference, this.getModuleNameToPass(moduleName), asn1Pool));
    if (!definition) {
      console.log(colors.gray('IE not found. Exit expand()'));
      return this;
    }
    console.log(colors.yellow('IE found'), `(type: ${definition.constructor.name})`);
    console.log(JSON.stringify(definition, null, 2));
    const parameterMapping: IParameterMapping[] = [];
    if (definition instanceof AsnType && definition.parameterList) {
      definition.parameterList.forEach((parameter, index) => {
        /**
         * e.g. ElementTypeParam: DefinedType { typeReference: 'XXX' }
         * New parameter scope starts
         * This overwrites
         */
        const actualParameter = this.actualParameterList[index];
        parameterMapping.push({ parameter, actualParameter });
      });
    }
    if (!(definition instanceof DefinedType)) {
      Object.assign(definition, {
        moduleReference: this.moduleReference,
        typeReference: `${this.toString()}`,
      });
    }
    definition.replaceParameters(parameterMapping);
    return definition.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
  }

  public depthMax(): number {
    return 0;
  }

  public replaceParameters(parameterMapping: IParameterMapping[]): void {
    if (!this.moduleReference && this.typeReference) {
      const mappingFound = parameterMapping.find((mapping) => mapping.parameter.dummyReference === this.typeReference);
      if (mappingFound) {
        Object.assign(this, mappingFound.actualParameter);
      }
    }
    // FIXME: Implemented in a very limited way
    if (this.actualParameterList) {
      parameterMapping.forEach((item) => {
        const { dummyReference } = item.parameter;
        const index = this.actualParameterList.findIndex((actualParameter) => {
          if (!(actualParameter instanceof ObjectIdentifierValue)) {
            return false;
          }
          return actualParameter.objIdComponentsList[0] === dummyReference;
        });
        if (index === -1) {
          return;
        }
        const actualParameterSource = item.actualParameter;
        const actualParameterTarget = this.actualParameterList[index];
        if (actualParameterSource instanceof ObjectIdentifierValue &&
            actualParameterTarget instanceof ObjectIdentifierValue) {
          actualParameterTarget.objIdComponentsList = actualParameterSource.objIdComponentsList;
        }
      });
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
