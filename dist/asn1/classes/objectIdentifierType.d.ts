import { IParameterMapping } from '../expander';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class ObjectIdentifierType {
    private objectIdentifierTypeTag;
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ObjectIdentifierType;
    setConstraints(constraints: Constraint[]): undefined;
    toString(): string;
}
//# sourceMappingURL=objectIdentifierType.d.ts.map