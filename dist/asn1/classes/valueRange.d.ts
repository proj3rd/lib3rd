import { IParameterMapping } from '../expander';
import { Value } from '../types/value';
import { Modules } from './modules';
export declare class ValueRange {
    lower: Value;
    upper: Value;
    valueRangeTag: boolean;
    constructor(lower: Value, upper: Value);
    static fromObject(obj: unknown): ValueRange;
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