import { ObjectClassAssignment } from "../classes/objectClassAssignment";
import { ObjectSetAssignment } from "../classes/objectSetAssignment";
import { ParameterizedTypeAssignment } from "../classes/parameterizedTypeAssignment";
import { TypeAssignment } from "../classes/typeAssignment";
import { ValueAssignment } from "../classes/valueAssignment";
export declare type Assignment = TypeAssignment | ObjectClassAssignment | ObjectSetAssignment | ParameterizedTypeAssignment | ValueAssignment;
export declare function AssignmentFromObject(obj: unknown): ObjectSetAssignment | ParameterizedTypeAssignment | ValueAssignment | TypeAssignment | ObjectClassAssignment;
//# sourceMappingURL=assignment.d.ts.map