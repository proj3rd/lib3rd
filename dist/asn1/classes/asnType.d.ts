import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { IParameter } from '../visitors/parameter';
import { Base } from './base';
import { Constraint } from './constraint';
export declare abstract class AsnType extends Base {
    parameterList: IParameter[];
    constraints: Array<Constraint | ConstraintSpec>;
    constraintsToString(): string;
    abstract expand(asn1Pool: IModules, moduleName?: string, parameterList?: IParameter[]): AsnType;
}
