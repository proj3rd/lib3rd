import { ConstraintSpec } from '../visitors/constraintSpec';
import { Base } from './base';
import { Constraint } from './constraint';
import { Parameter } from './parameter';
export declare abstract class AsnType extends Base {
    parameterList: Parameter[];
    constraints: Array<Constraint | ConstraintSpec>;
    constraintsToString(): string;
    abstract expand(asn1Pool: IModules, moduleName?: string, parameterList?: IParameter[]): AsnType;
}
