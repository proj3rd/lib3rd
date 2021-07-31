import { FixedTypeValueFieldSpec } from "../classes/fixedTypeValueFieldSpec";
import { TypeFieldSpec } from "../classes/typeFieldSpec";
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";

export type FieldSpec = TypeFieldSpec | FixedTypeValueFieldSpec; // FixedTypeValue[Set]FieldSpec
// | VariableTypeFieldSpec // VariableTypeValue[Set]FieldSpec
// | ObjectFieldSpec // Object[Set]FieldSpec

export function FieldSpecFromObject(obj: unknown): FieldSpec {
  const { typeFieldSpecTag } = obj as TypeFieldSpec;
  if (typeFieldSpecTag) {
    return TypeFieldSpec.fromObject(obj);
  }
  const { fixedTypeValueFieldSpecTag } = obj as FixedTypeValueFieldSpec;
  if (fixedTypeValueFieldSpecTag) {
    return FixedTypeValueFieldSpec.fromObject(obj);
  }
  throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
