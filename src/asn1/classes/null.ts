import { Base } from './base';

export class Null extends Base {
  public setConstraint(constraint: any): Null {
    return this;
  }

  public expand(): Null {
    return this;
  }

  public toString(depth: number = 0): string {
    return 'NULL';
  }
}
