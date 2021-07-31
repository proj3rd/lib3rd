import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";

export class Reference {
  public name: string;
  public parameterized: boolean;

  public referenceTag = true;

  constructor(name: string, parameterized: boolean = false) {
    this.name = name;
    this.parameterized = parameterized;
  }

  public static fromObject(obj: unknown): Reference {
    const { name, parameterized, referenceTag } = obj as Reference;
    if (!referenceTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (typeof name !== 'string'
        || typeof parameterized !== 'boolean'
    ) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    return new Reference(name, parameterized);
  }

  public toString(): string {
    if (this.parameterized) {
      return `${this.name}{}`;
    }
    return this.name;
  }
}

export type AsnSymbol = Reference;
