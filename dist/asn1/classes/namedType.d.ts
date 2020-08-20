import { IParameterMapping } from '../expander';
import { AsnType } from './asnType';
import { Modules } from './modules';
export declare class NamedType {
    name: string;
    asnType: AsnType;
    private namedTypeTag;
    constructor(name: string, asnType: AsnType);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): NamedType;
    toString(): string;
}
//# sourceMappingURL=namedType.d.ts.map