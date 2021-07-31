import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";

export type TagDefault =
| 'EXPLICIT TAGS'
| 'IMPLICIT TAGS'
| 'AUTOMATIC TAGS'
| '';

export function TagDefaultFromObject(obj: unknown) {
  if (typeof obj !== 'string') {
    throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
  }
  if (obj !== 'EXPLICIT TAGS'
      && obj !== 'IMPLICIT TAGS'
      && obj !== 'AUTOMATIC TAGS'
      && obj !== ''
  ) {
    throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
  }
  return obj;
}
