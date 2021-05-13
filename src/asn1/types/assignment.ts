import { ObjectClassAssignment } from "../classes/objectClassAssignment";
import { ObjectSetAssignment } from "../classes/objectSetAssignment";
import { ParameterizedTypeAssignment } from "../classes/parameterizedTypeAssignment";
import { TypeAssignment } from "../classes/typeAssignment";
import { ValueAssignment } from "../classes/valueAssignment";
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";

export type Assignment =
  | TypeAssignment
  | ObjectClassAssignment
  | ObjectSetAssignment
  | ParameterizedTypeAssignment
  | ValueAssignment;

export function AssignmentFromObject(obj: unknown) {
  const { typeAssignmentTag } = obj as TypeAssignment;
  if (typeAssignmentTag) {
    return TypeAssignment.fromObject(obj);
  }
  const { objectClassAssignmentTag } = obj as ObjectClassAssignment;
  if (objectClassAssignmentTag) {
    return ObjectClassAssignment.fromObject(obj);
  }
  const { objectSetAssignmentTag } = obj as ObjectSetAssignment;
  if (objectSetAssignmentTag) {
    return ObjectSetAssignment.fromObject(obj);
  }
  const { parameterizedTypeAssignmentTag } = obj as ParameterizedTypeAssignment;
  if (parameterizedTypeAssignmentTag) {
    return ParameterizedTypeAssignment.fromObject(obj);
  }
  const { valueAssignmentTag } = obj as ValueAssignment;
  if (valueAssignmentTag) {
    return ValueAssignment.fromObject(obj);
  }
  throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
