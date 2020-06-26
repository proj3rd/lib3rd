import { AsnType } from './asnType';

export class NamedType {
  public name: string;
  public asnType: AsnType;

  private namedTypeTag: undefined;

  constructor(name: string, asnType: AsnType) {
    this.name = name;
    this.asnType = asnType;
  }

  public toString(): string {
    return `${this.name}    ${this.asnType.toString()}`;
  }
}
