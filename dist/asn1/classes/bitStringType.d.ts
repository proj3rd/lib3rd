import { IParameterMapping } from '../expander';
import { INamedBit } from '../types';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class BitStringType {
    constraint: Constraint | undefined;
    namedBitList: INamedBit[];
    private bitStringTypeTag;
    constructor(namedBitList?: INamedBit[]);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): BitStringType;
    setConstraints(constraints: Constraint[]): undefined;
    toString(): string;
}
//# sourceMappingURL=bitStringType.d.ts.map