import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { Base } from './base';

export class ComponentPresence extends Base {
  public identifier: string;
  public absentPresent: string;

  constructor(identifier: string, absentPresent: string) {
    super();

    this.identifier = identifier;
    this.absentPresent = absentPresent;
  }

  public setConstraint(constraint: any): ComponentPresence {
    if (!isEmpty(constraint)) {
      log.warn(`ComponentPresence could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): ComponentPresence {
    return this;
  }

  public toString(): string {
    return `${this.identifier} ${this.absentPresent}`;
  }
}
