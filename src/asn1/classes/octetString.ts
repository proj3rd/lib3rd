import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { Base } from './base';

export class OctetString extends Base {
  public size: number | string;
  public sizeMin: number | string;
  public sizeMax: number | string;

  public setConstraint(constraint: any): OctetString {
    if ('min' in constraint && 'max' in constraint) {
      this.size = null;
      this.sizeMin = constraint.min;
      delete constraint.min;
      this.sizeMax = constraint.max;
      delete constraint.max;
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

  public toString(depth: number = 0): string {
    // TODO
    return 'OCTET STRING';
  }
}
