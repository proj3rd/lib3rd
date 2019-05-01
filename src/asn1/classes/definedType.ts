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

  public toString(): string {
    // TODO
    return null;
  }
}
