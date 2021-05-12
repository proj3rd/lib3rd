import { ComponentType } from "../classes/componentType";
import { ExtensionAdditionGroup } from "../classes/extensionAdditionGroup";
import { ExtensionMarker } from "../classes/extensionMarker";
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";

export type RootSequenceComponents =
  | ComponentType
  | ExtensionMarker
  | ExtensionAdditionGroup;

export function RootSequenceComponentsFromObject(obj: unknown): RootSequenceComponents {
  const { componentTypeTag } = obj as ComponentType;
  if (componentTypeTag) {
    return ComponentType.fromObject(obj);
  }
  const { extensionMarkerTag } = obj as ExtensionMarker;
  if (extensionMarkerTag) {
    return ExtensionMarker.getInstance();
  }
  const { extensionAdditionGroupTag } = obj as ExtensionAdditionGroup;
  if (extensionAdditionGroupTag) {
    return ExtensionAdditionGroup.fromObject(obj);
  }
  throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
