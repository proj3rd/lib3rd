import { log } from '../../utils/logging';

import { Base } from './base';

export class Enumerated extends Base {
  public items: any[];

  constructor(items: any[]) {
    super();

    this.items = items;
  }

  public setConstraint(constraint: any): Enumerated {
    log.info(`Enumerated constraint ${JSON.stringify(constraint)}`);

    // TODO
    return this;
  }

  public expand(): Enumerated {
    return this;
  }

  public toString(depth: number = 0): string {
    return `ENUMERATED {${this.items.join(', ')}}`;
  }
}
