import { log } from '../../utils/logging';

import { Base } from './base';

export class NamedType extends Base {
  public name: string;
  public type: any;

  constructor(name: string, type: any) {
    super();

    this.name = name;
    this.type = type;
  }
  public setConstraint(constraint: any): NamedType {
    log.info(`NamedType constraint ${JSON.stringify(constraint)}`);

    // TODO
    return this;
  }

  public expand(): NamedType {
    // TODO
    return this;
  }

  public toString(depth: number = 0): string {
    // TODO
    return null;
  }
}
