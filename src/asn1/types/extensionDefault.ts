import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";

export type ExtensionDefault = 'EXTENSIBILITY IMPLIED' | '';

export function ExtensionDefaultFromObject(obj: unknown) {
  if (obj !== 'EXTENSIBILITY IMPLIED'
      && obj !== ''
  ) {
    throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
  }
  return obj;
}
