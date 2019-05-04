import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { Base } from './base';

export class AsnBoolean extends Base {
  public setConstraint(constraint: any): AsnBoolean {
    if (!isEmpty(constraint)) {
      log.warn(`Boolean could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): AsnBoolean {
    return this;
  }

  public toString(): string {
    return 'BOOLEAN';
  }
}
