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
      this.min = undefined;
      this.max = undefined;
    }
    if ('min' in constraint && 'max' in constraint) {
      this.min = constraint.min;
      delete constraint.min;
      this.max = constraint.max;
      delete constraint.max;
      this.value = undefined;
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
    const valueConstraint = this.value !== undefined ? `(${this.value})` :
      this.min !== undefined && this.max !== undefined ? `(${this.min}..${this.max})` : '';
    return `INTEGER ${valueConstraint}`;
  }
}
