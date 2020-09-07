import { IParameterMapping } from '../expander';
import { Modules } from './modules';
export declare class ValueReference {
    valueReference: string;
    private valueReferenceTag;
    constructor(valueReference: string);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ValueReference;
    getDepth(): number;
    toString(): string;
}
//# sourceMappingURL=ValueReference.d.ts.map