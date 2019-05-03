import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { Base } from './base';

export class SequenceOf extends Base {
  public type: any /* TODO */;
  public size: number | string;
  public sizeMin: number | string;
  public sizeMax: number | string;

  constructor(type: any /* TODO */) {
    super();

    this.type = type;
  }

  public setConstraint(constraint: any): SequenceOf {
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
      log.warn(`SequenceOf could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): SequenceOf {
    // TODO
    return this;
  }

  public toString(depth: number = 0): string {
    // TODO
    return null;
  }
}
