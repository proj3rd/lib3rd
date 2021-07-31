import { ExtensionMarker } from "../classes/extensionMarker";
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";
import { INamedNumber, NamedNumberFromObject } from "./namedNumber";

export type EnumerationItem = string | INamedNumber | ExtensionMarker;

export function EnumerationItemFromObject(obj: unknown): EnumerationItem {
  if (typeof obj === 'string') {
    return obj;
  }
  const { name, valueLiteral } = obj as INamedNumber;
  if (typeof name === 'string' && typeof valueLiteral === 'string') {
    return NamedNumberFromObject(obj);
  }
  const { extensionMarkerTag } = obj as ExtensionMarker;
  if (extensionMarkerTag) {
    return ExtensionMarker.getInstance();
  }
  throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
