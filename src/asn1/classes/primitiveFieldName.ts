import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";

export class PrimitiveFieldName {
  public name: string;

  public primitiveFieldNameTag = true;

  constructor(name: string) {
    this.name = name;
  }

  public static fromObject(obj: unknown): PrimitiveFieldName {
    const { name, primitiveFieldNameTag } = obj as PrimitiveFieldName;
    if (!primitiveFieldNameTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!name || typeof name !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    return new PrimitiveFieldName(name);
  }

  public toString(): string {
    return `&${this.name}`;
  }
}
