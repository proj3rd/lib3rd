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

export class ExtensionAdditionGroup extends Base {
  public componentTypeList: NamedType[];

  constructor(alternativeTypeList: NamedType[], versionNumber: null) {
    super();

    this.componentTypeList = alternativeTypeList;
    if (versionNumber !== undefined && versionNumber !== null) {
      log.warn('ExtensionAdditionGroup could not handle versionNumber');
    }
  }

  public setConstraint(constraints: Array<Constraint | ConstraintSpec>): ExtensionAdditionGroup {
    if (!isEmpty(constraints)) {
      log.warn(`ExtensionAdditionGroup could not handle constraint ${JSON.stringify(constraints)}`);
    }
    return this;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList: Parameter[] = []): ExtensionAdditionGroup {
    this.componentTypeList.forEach((item) => {
      item.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
    });
    return this;
  }

  public depthMax(): number {
    let depthMax = 0;
    this.componentTypeList.forEach((item) => {
      depthMax = Math.max(depthMax, item.depthMax() + 1);
    });
    return depthMax;
  }

  public replaceParameters(paramterMapping: IParameterMapping[]): ExtensionAdditionGroup {
    this.componentTypeList.forEach((item) => {
      item.replaceParameters(paramterMapping);
    });
    return this;
  }

  public toString(): string {
    const itemString = [];
    this.componentTypeList.forEach((item, index) => {
      const comma = index < this.componentTypeList.length - 1 ? ',' : '';
      const tag = item.tag;
      const tagString = tag ? `    ${tag}` : '';
      itemString.push(`${this.indent(item.toString())}${comma}${tagString}`);
    });
    return [
      '[[',
      itemString.join('\n'),
      ']]',
    ].join('\n');
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth: number = 0): [number, number] {
    ieElem.ie = '[[';
    [row, col] = fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
    this.componentTypeList.forEach((componentType) => {
      [row, col] = componentType.fillWorksheet({}, ws, row, col, depthMax, constants, formatConfig, depth + 1);
    });
    ieElem.ie = ']]';
    [row, col] = fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
    return [row, col];
  }
}
