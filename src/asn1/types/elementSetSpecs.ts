import { ExtensionMarker } from "../classes/extensionMarker";
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";
import { ElementSetSpec, ElementSetSpecFromObject } from "./elementSetSpec";

export type ElementSetSpecs = Array<ElementSetSpec | ExtensionMarker>;

export function ElementSetSpecsFromObject(obj: unknown): ElementSetSpecs {
  if (!(obj instanceof Array)) {
    throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
  }
  return obj.map((item) => {
    const { extensionMarkerTag } = item as ExtensionMarker;
    if (extensionMarkerTag) {
      return ExtensionMarker.getInstance();
    }
    return ElementSetSpecFromObject(item);
  });
}
