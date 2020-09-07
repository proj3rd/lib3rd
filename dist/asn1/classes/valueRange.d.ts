import { IParameterMapping } from '../expander';
import { Modules } from './modules';
import { Value } from './value';
export declare class ValueRange {
    lower: Value;
    upper: Value;
    private valueRangeTag;
    constructor(lower: Value, upper: Value);
    /**
     * Expand `lower` and `upper` properties. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ValueRange;
    getDepth(): number;
    toString(): string;
    private expandValue;
}
//# sourceMappingURL=valueRange.d.ts.map