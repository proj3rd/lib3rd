import { Base } from './base';

export class AsnBoolean extends Base {
  public setConstraint(): AsnBoolean {
    return this;
  }

  public expand(): AsnBoolean {
    return this;
  }

  public toString(depth: number = 0): string {
    return 'BOOLEAN';
  }
}
