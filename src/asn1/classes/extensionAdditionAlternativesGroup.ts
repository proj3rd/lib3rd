import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { fillRow, IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';
import { NamedType } from './namedType';

export class ExtensionAdditionAlternativesGroup extends Base {
  public alternativeTypeList: NamedType[];

  constructor(alternativeTypeList: any, versionNumber: any) {
    super();

    this.alternativeTypeList = alternativeTypeList;
    if (versionNumber !== undefined && versionNumber !== null) {
      log.warn('ExtensionAdditionAlternativesGroup could not handle versionNumber');
    }
  }

  public setConstraint(constraint: any): ExtensionAdditionAlternativesGroup {
    if (!isEmpty(constraint)) {
      log.warn(`ExtensionAdditionAlternativesGroup could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(asn1Pool: any /* TODO */, moduleName?: string, parameterList: string[] = [])
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

  public replaceParameters(paramterMapping: {}): void {
    this.alternativeTypeList.forEach((item) => {
      item.replaceParameters(paramterMapping);
    });
  }

  public toString(): string {
    return [
      '[[',
      this.alternativeTypeList.map((item) => this.indent(item.toString())).join(',\n'),
      ']]',
    ].join('\n');
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[],
                       formatConfig: IFormatConfig, depth: number = 0): [number, number] {
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
