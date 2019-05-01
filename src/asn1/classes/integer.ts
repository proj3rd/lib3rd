import { log } from '../../utils/logging';

import { Base } from './base';

export class Integer extends Base {
  public namedNumberList: any; // TODO
  public value: number | string;
  public min: number | string;
  public max: number | string;

  public setConstraint(constraint: any): Integer {
    log.info(`Integer constraint ${JSON.stringify(constraint)}`);

    if ('value' in constraint) {
      this.value = constraint.value;
      this.min = null;
      this.max = null;
    }
    if ('min' in constraint && 'max' in constraint) {
      this.value = null;
      this.min = constraint.min;
      this.max = constraint.max;
    }
    return this;
  }

  public expand(): Integer {
    return this;
  }

  public toString(depth: number = 0): string {
    const valueConstraint = this.value ? `(${this.value})` :
      this.min !== null && this.max !== null ? `(${this.min}..${this.max})` : '';
    return `INTENGER ${valueConstraint}`;
  }
}
