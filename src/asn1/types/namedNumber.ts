import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";

export interface INamedNumber {
  name: string;
  valueLiteral: string;
}

export function NamedNumberFromObject(obj: unknown): INamedNumber {
  const { name, valueLiteral } = obj as INamedNumber;
  if (typeof name !== 'string' || typeof valueLiteral !== 'string') {
    throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
  }
  return { name, valueLiteral };
}
