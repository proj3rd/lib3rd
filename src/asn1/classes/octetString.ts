import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { Base } from './base';

export class OctetString extends Base {
  public size: number | string;
  public sizeMin: number | string;
  public sizeMax: number | string;
  public containing: any /* TODO */;

  public setConstraint(constraint: any): OctetString {
    if ('value' in constraint) {
      this.size = constraint.value;
      delete constraint.value;
    }
    if ('min' in constraint) {
      this.sizeMin = constraint.min;
      delete constraint.min;
    }
    if ('max' in constraint) {
      this.sizeMax = constraint.max;
      delete constraint.max;
    }
    if ('containing' in constraint) {
      this.containing = constraint.containing;
      delete constraint.containing;
    }
    if (!isEmpty(constraint)) {
      log.warn(`OctetStringType could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): OctetString {
    // TODO
    return this;
  }

  public toString(): string {
    const containing = this.containing ? ` (CONTAINING ${this.containing.toString()})` : '';
    const size = this.size ? ` (SIZE (${this.size}))` :
      this.sizeMin && this.sizeMax ? ` (SIZE (${this.sizeMin}..${this.sizeMax}))` : '';
    return `OCTET STRING${containing}${size}`;
  }
}
