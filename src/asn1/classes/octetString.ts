import { log } from '../../utils/logging';

import { Base } from './base';

export class OctetString extends Base {
  public setConstraint(constraint: any): OctetString {
    log.info(`OctetStringType constraint ${JSON.stringify(constraint)}`);

    // TODO
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
