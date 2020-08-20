import { IParameterMapping } from '../expander';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class NullType {
    static getInstance(): NullType;
    private static instance;
    private nullTypeTag;
    private constructor();
    expand(modules: Modules, parameterMappings: IParameterMapping[]): NullType;
    setConstraints(constraints: Constraint[]): void;
    toString(): string;
}
//# sourceMappingURL=nullType.d.ts.map