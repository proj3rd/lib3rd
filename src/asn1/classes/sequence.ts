import * as colors from 'colors';
import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { fillRow, IFormatConfig, IIe } from '../format/xlsx';
import { findDefinition } from '../utils';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { AsnType } from './asnType';
import { IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
import { NamedType } from './namedType';
import { ObjectIdentifierValue } from './objectIdentifierValue';
import { ObjectSet } from './objectSet';
import { Parameter } from './parameter';

export class Sequence extends AsnType {
  public items: NamedType[];

  constructor(items: NamedType[]) {
    super();

    this.items = items;
  }

  public setConstraint(constraints: Array<Constraint | ConstraintSpec>): Sequence {
    if (!isEmpty(constraints)) {
      log.warn(`Sequence could not handle constraint ${JSON.stringify(constraints)}`);
    }
    return this;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList: Parameter[] = []): Sequence {
    this.items.forEach((item) => {
      item.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
    });
    return this;
  }

  public depthMax(): number {
    let depthMax = 0;
    this.items.forEach((item) => {
      depthMax = Math.max(depthMax, item.depthMax() + 1);
    });
    return depthMax;
  }

  public replaceParameters(parameterMapping: IParameterMapping[], asn1Pool: IModules, moduleName: string)
      : Sequence | ObjectSet {
    console.log(colors.blue(__filename), 'replaceParameters()');
    console.log(colors.yellow('Current IE'));
    console.log(JSON.stringify(this, null, 2));
    console.log(colors.yellow('Parameter mapping'));
    parameterMapping.forEach((item, index) => {
      console.log(colors.yellow(`[${index}]`), `(actualParameter: ${item.actualParameter.constructor.name})`);
      console.log(JSON.stringify(item, null, 2));
    });
    if (parameterMapping && parameterMapping.length > 0) {
      const paramFirst = parameterMapping[0].actualParameter;
      if (parameterMapping.length > 1) {
        console.log(colors.red('parameterMapping has more than 1'));
      }
      if (paramFirst instanceof ObjectIdentifierValue) {
        const definition = findDefinition(paramFirst.objIdComponentsList[0] as string,
                                          this.getModuleNameToPass(moduleName), asn1Pool);
        if (definition && definition instanceof ObjectSet) {
          console.log(colors.yellow('ObjectSet found. Need to INSTANTIATE'));
          const template = new Sequence(this.items);
          definition.instantiate(template, asn1Pool);
          console.log(colors.yellow('INSTANTIATE result'));
          console.log(JSON.stringify(definition, null, 2));
          return definition;
        }
      }
    }
    /** TODO
     * If parameterMapping points Object Set,
     * duplicate Sequnce as many as te number of items in the Object Set
     */
    this.items.forEach((item) => {
      item.replaceParameters(parameterMapping);
    });
    return this;
  }

  public toString(): string {
    if (!this.items.length) {
      return 'SEQUENCE {}';
    }
    const itemString = [];
    this.items.forEach((item, index) => {
      const comma = index < this.items.length - 1 ? ',' : '';
      const tag = item.tag;
      const tagString = tag ? `    ${tag}` : '';
      itemString.push(`${this.indent(item.toString())}${comma}${tagString}`);
    });
    return [
      'SEQUENCE {',
      itemString.join('\n'),
      '}',
    ].join('\n');
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth: number = 0): [number, number] {
    ieElem.type = 'SEQUENCE';
    [row, col] = fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
    this.items.forEach((item) => {
      [row, col] = item.fillWorksheet({}, ws, row, col, depthMax, constants, formatConfig, depth + 1);
    });
    return [row, col];
  }
}
