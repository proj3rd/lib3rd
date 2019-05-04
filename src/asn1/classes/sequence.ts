import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { Base } from './base';

export class Sequence extends Base {
  public items: any[] /* TODO */;

  constructor(items: any[] /* TODO */) {
    super();

    this.items = items;
  }

  public setConstraint(constraint: any): Sequence {
    if (!isEmpty(constraint)) {
      log.warn(`Sequence could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): Sequence {
    // TODO
    return this;
  }

  public toString(): string {
    // TODO
    return [
      'SEQUENCE {',
      ...this.items.map((item) => this.indent(item.toString())),
      '}',
    ].join('\n');
  }
}
