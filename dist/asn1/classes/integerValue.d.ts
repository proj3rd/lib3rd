import { IParameterMapping } from '../expander';
import { Modules } from './modules';
import { ValueReference } from './ValueReference';
export declare class IntegerValue {
    literal: string;
    value: number | ValueReference;
    private integerValueTag;
    constructor(literal: string);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): IntegerValue;
    getDepth(): number;
    toString(): string;
}
//# sourceMappingURL=integerValue.d.ts.map