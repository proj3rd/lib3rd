import { IParameterMapping } from '../expander';
import { Modules } from './modules';
export declare class BooleanValue {
    literal: string;
    value: boolean;
    private booleanValueTag;
    constructor(literal: string);
    expand(moduleS: Modules, parameterMappings: IParameterMapping[]): BooleanValue;
    getDepth(): number;
    toString(): string;
}
//# sourceMappingURL=booleanValue.d.ts.map