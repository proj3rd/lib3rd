import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { Base } from './base';

export class Enumerated extends Base {
  public items: any[];

  constructor(items: any[]) {
    super();

    this.items = items;
  }

  public setConstraint(constraint: any): Enumerated {
    if (!isEmpty(constraint)) {
      log.warn(`Enumerated could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): Enumerated {
    return this;
  }

  public getDepthMax(): number {
    return 1;
  }

  public toString(): string {
    return `ENUMERATED {${this.items.join(', ')}}`;
  }
}
