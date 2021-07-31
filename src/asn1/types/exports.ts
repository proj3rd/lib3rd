import { AsnSymbol, Reference } from "../classes/asnSymbol";
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";

export type Exports = 'ALL' | AsnSymbol[];

export function ExportsFromObject(obj: unknown): Exports {
  if (obj === 'ALL') {
    return obj;
  }
  if (!(obj instanceof Array)) {
    throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
  }
  const exports = obj.map((item) => Reference.fromObject(item));
  return exports;
}
