import { IParameterMapping } from '../expander';
import { AsnType } from './asnType';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class TypeReference {
    typeReference: string;
    constraint: Constraint | undefined;
    private typeReferenceTag;
    constructor(typeReference: string);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): AsnType;
    setConstraints(constraints: Constraint[]): undefined;
    toString(): string;
}
//# sourceMappingURL=typeReference.d.ts.map