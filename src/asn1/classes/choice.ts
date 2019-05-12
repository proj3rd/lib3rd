import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { fillRow, IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';
import { NamedType } from './namedType';

export class Choice extends Base {
  public choices: NamedType[];

  constructor(choices: any) {
    super();

    this.choices = choices;
  }

  public setConstraint(constraint: any): Choice {
    if (!isEmpty(constraint)) {
      log.warn(`Choice constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): Choice {
    this.choices.forEach((choice) => {
      choice.expand();
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
