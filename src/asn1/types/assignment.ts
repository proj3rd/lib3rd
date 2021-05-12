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
  const {
    typeAssignmentTag,
    objectClassAssignmentTag,
    objectSetAssignmentTag,
    valueAssignmentTag,
  } = obj as any;
  if (typeAssignmentTag) {
    return TypeAssignment.fromObject(obj);
  }
  if (objectClassAssignmentTag) {
    return ObjectClassAssignment.fromObject(obj);
  }
  if (objectSetAssignmentTag) {
    return ObjectSetAssignment.fromObject(obj);
  }
  if (valueAssignmentTag) {
    return ValueAssignment.fromObject(obj);
  }
  throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
