import { log } from '../../utils/logging';

export class Enumerated {
  public items: any[];

  constructor(items: any[]) {
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

  public toString(): string {
    return `ENUMERATED {${this.items.join(', ')}}`;
  }
}
