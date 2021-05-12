import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";

export interface IDefinitiveObjIdComponent {
  name: string;
  number: string;
}

export function DefinitiveObjIdComponentFromObject(obj: unknown): IDefinitiveObjIdComponent {
  const { name, number } = obj as IDefinitiveObjIdComponent;
  if (typeof name !== 'string' || !name) {
    throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
  }
  if (typeof number !== 'string' || !number) {
    throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
  }
  return { name, number };
}
