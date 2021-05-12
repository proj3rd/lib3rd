import { ExtensionAdditionAlternativeGroup } from "../classes/extensionAdditionAlternativeGroup";
import { ExtensionMarker } from "../classes/extensionMarker";
import { NamedType } from "../classes/namedType";
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";

export type RootChoiceComponents =
  | NamedType
  | ExtensionMarker
  | ExtensionAdditionAlternativeGroup;

export function RootChoiceComponentsFromObject(obj: unknown): RootChoiceComponents {
  const { namedTypeTag } = obj as NamedType;
  if (namedTypeTag) {
    return NamedType.fromObject(obj);
  }
  const { extensionMarkerTag } = obj as ExtensionMarker;
  if (extensionMarkerTag) {
    return ExtensionMarker.getInstance();
  }
  const { extensionAdditionAlternativeGroupTag } = obj as ExtensionAdditionAlternativeGroup;
  if (extensionAdditionAlternativeGroupTag) {
    return ExtensionAdditionAlternativeGroup.fromObject(obj);
  }
  throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
