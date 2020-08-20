import { IParameterMapping } from '../expander';
import { INamedNumber } from '../types';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class IntegerType {
    constraint: Constraint | undefined;
    namedNumberList: INamedNumber[];
    private integerTypeTag;
    constructor(namedNumberList?: INamedNumber[]);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): IntegerType;
    setConstraints(constraints: Constraint[]): undefined;
    toString(): string;
}
//# sourceMappingURL=integerType.d.ts.map