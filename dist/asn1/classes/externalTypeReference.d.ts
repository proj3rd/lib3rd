import { IParameterMapping } from '../expander';
import { AsnType } from './asnType';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class ExternalTypeReference {
    moduleReference: string;
    typeReference: string;
    private externalTypeReferenceTag;
    constructor(moduleReference: string, typeReference: string);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): AsnType;
    setConstraints(constraints: Constraint[]): void;
    toString(): string;
}
//# sourceMappingURL=externalTypeReference.d.ts.map