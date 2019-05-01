import { Base } from './base';

export class DefinedType extends Base {
  public moduleReference: string;
  public typeReference: string;

  public setConstraint(constraint: any): DefinedType {
    // TODO
    return this;
  }

  public expand(): DefinedType {
    // TODO
    return this;
  }

  public toString(depth: number = 0): string {
    // TODO
    return null;
  }
}
