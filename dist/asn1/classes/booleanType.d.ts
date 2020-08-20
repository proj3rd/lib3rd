import { IParameterMapping } from '../expander';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class BooleanType {
    static getInstance(): BooleanType;
    private static instance;
    private booleanTypeTag;
    private constructor();
    expand(modules: Modules, parameterMappings: IParameterMapping[]): BooleanType;
    setConstraints(constraints: Constraint[]): void;
    toString(): string;
}
//# sourceMappingURL=booleanType.d.ts.map