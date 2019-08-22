import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { fillRow, IFormatConfig, IIe } from '../format/xlsx';

import { AlternativeTypeLists } from '../visitors/alternativeTypeLists';
import { AsnType } from './asnType';

export class Choice extends AsnType {
  public choices: AlternativeTypeLists;

  constructor(choices: AlternativeTypeLists) {
    super();

    this.choices = choices;
  }

  public setConstraint(constraint: any): Choice {
    if (!isEmpty(constraint)) {
      log.warn(`Choice constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(asn1Pool: any /* TODO */, moduleName?: string, parameterList: string[] = []): Choice {
    this.choices.forEach((choice) => {
      choice.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
    });
    return this;
  }

  public depthMax(): number {
    let depthMax = 0;
    this.choices.forEach((choice) => {
      depthMax = Math.max(depthMax, choice.depthMax() + 1);
    });
    return depthMax;
  }

  public replaceParameters(parameterMapping: {}): void {
    this.choices.forEach((choice) => {
      choice.replaceParameters(parameterMapping);
    });
  }

  public toString(): string {
    return !this.choices.length ? 'CHOICE {}' : [
      'CHOICE {',
      this.choices.map((choice) => this.indent(choice.toString())).join(',\n'),
      '}',
    ].join('\n');
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[],
                       formatConfig: IFormatConfig, depth: number = 0): [number, number] {
    ieElem.type = 'CHOICE';
    [row, col] = fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
    this.choices.forEach((choice) => {
      [row, col] = choice.fillWorksheet({}, ws, row, col, depthMax, constants, formatConfig, depth + 1);
    });
    return [row, col];
  }
}
