import { IExpandOption } from '../expander';
import { AsnType } from './asnType';
import { Modules } from './modules';

export class NamedType {
  public name: string;
  public asnType: AsnType;

  private namedTypeTag: undefined;

  constructor(name: string, asnType: AsnType) {
    this.name = name;
    this.asnType = asnType;
  }

  public expand(modules: Modules, expandOption: IExpandOption): NamedType {
    const expandedType = this.asnType.expand(modules, expandOption);
    if (expandedType !== undefined) {
      this.asnType = expandedType;
    }
    return this;
  }

  public toString(): string {
    return `${this.name}    ${this.asnType.toString()}`;
  }
}
