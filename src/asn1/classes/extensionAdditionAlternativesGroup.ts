import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { fillRow, IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
import { NamedType } from './namedType';
import { Parameter } from './parameter';

export class ExtensionAdditionAlternativesGroup extends Base {
  public alternativeTypeList: NamedType[];

  constructor(alternativeTypeList: NamedType[], versionNumber: null) {
    super();

    this.alternativeTypeList = alternativeTypeList;
    if (versionNumber !== undefined && versionNumber !== null) {
      log.warn('ExtensionAdditionAlternativesGroup could not handle versionNumber');
    }
  }

  public setConstraint(constraints: Array<Constraint | ConstraintSpec>): ExtensionAdditionAlternativesGroup {
    if (!isEmpty(constraints)) {
      log.warn(`ExtensionAdditionAlternativesGroup could not handle constraint ${JSON.stringify(constraints)}`);
    }
    return this;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList: Parameter[] = [])
    : ExtensionAdditionAlternativesGroup {
    this.alternativeTypeList.forEach((item) => {
      item.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
    });
    return this;
  }

  public depthMax(): number {
    let depthMax = 0;
    this.alternativeTypeList.forEach((item) => {
      depthMax = Math.max(depthMax, item.depthMax() + 1);
    });
    return depthMax;
  }

  public replaceParameters(paramterMapping: IParameterMapping[]): ExtensionAdditionAlternativesGroup {
    this.alternativeTypeList.forEach((item) => {
      item.replaceParameters(paramterMapping);
    });
    return this;
  }

  public toString(): string {
    return [
      '[[',
      this.alternativeTypeList.map((item) => this.indent(item.toString())).join(',\n'),
      ']]',
    ].join('\n');
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth: number = 0): [number, number] {
    ieElem.ie = '[[';
    [row, col] = fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
    this.alternativeTypeList.forEach((item) => {
      [row, col] = item.fillWorksheet({}, ws, row, col, depthMax, constants, formatConfig, depth + 1);
    });
    ieElem.ie = ']]';
    [row, col] = fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
    return [row, col];
  }
}
