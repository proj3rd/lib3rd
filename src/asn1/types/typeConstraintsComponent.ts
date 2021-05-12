import { ComponentPresence } from "../classes/componentPresence";
import { ExtensionMarker } from "../classes/extensionMarker";
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";

export type TypeConstraintsComponent = ComponentPresence | ExtensionMarker;

export function TypeConstraintsComponentFromObject(obj: unknown): TypeConstraintsComponent {
  const { componentPresenceTag } = obj as ComponentPresence;
  if (componentPresenceTag) {
    return ComponentPresence.fromObject(obj);
  }
  const { extensionMarkerTag } = obj as ExtensionMarker;
  if (extensionMarkerTag) {
    return ExtensionMarker.getInstance();
  }
  throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
