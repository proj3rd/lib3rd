import { IParameterMapping } from '../expander';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class OctetStringType {
    constraint: Constraint | undefined;
    private octetStringTypeTag;
    expand(modules: Modules, parameterMappings: IParameterMapping[]): OctetStringType;
    setConstraints(constraints: Constraint[]): undefined;
    toString(): string;
}
//# sourceMappingURL=octetStringType.d.ts.map