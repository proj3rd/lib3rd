import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { Base } from './base';

export class Null extends Base {
  public setConstraint(constraint: any): Null {
    if (!isEmpty(constraint)) {
      log.warn(`Null could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): Null {
    return this;
  }

  public toString(): string {
    return 'NULL';
  }
}
