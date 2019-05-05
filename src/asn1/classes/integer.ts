import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { Base } from './base';

export class Integer extends Base {
  public namedNumberList: any; // TODO
  public value: number | string;
  public min: number | string;
  public max: number | string;

  public setConstraint(constraint: any): Integer {
    if ('value' in constraint) {
      this.value = constraint.value;
      delete constraint.value;
      this.min = null;
      this.max = null;
    }
    if ('min' in constraint && 'max' in constraint) {
      this.value = null;
      this.min = constraint.min;
      delete constraint.min;
      this.max = constraint.max;
      delete constraint.max;
    }
    if (!isEmpty(constraint)) {
      log.warn(`Integer could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): Integer {
    return this;
  }

  public toString(): string {
    const valueConstraint = this.value ? `(${this.value})` :
      this.min !== null && this.max !== null ? `(${this.min}..${this.max})` : '';
    return `INTEGER ${valueConstraint}`;
  }
}
