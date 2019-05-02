import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { Base } from './base';

export class BitString extends Base {
  public namedBitList: any; // TODO
  public size: number | string;
  public sizeMin: number | string;
  public sizeMax: number | string;

  public setConstraint(constraint: any): BitString {
    if ('value' in constraint) {
      this.size = constraint.value;
      delete constraint.value;
      this.sizeMin = null;
      this.sizeMax = null;
    }
    if ('min' in constraint && 'max' in constraint) {
      this.size = null;
      this.sizeMin = constraint.min;
      delete constraint.min;
      this.sizeMax = constraint.max;
      delete constraint.max;
    }
    if (!isEmpty(constraint)) {
      log.warn(`BitString could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): BitString {
    return this;
  }

  public toString(depth: number = 0): string {
    const valueConstraint = this.size ? `(SIZE (${this.size}))` :
      this.sizeMin !== null && this.sizeMax !== null ? `(SIZE (${this.sizeMin}..${this.sizeMax}))` : '';
    return `BIT STRING ${valueConstraint}`;
  }
}
