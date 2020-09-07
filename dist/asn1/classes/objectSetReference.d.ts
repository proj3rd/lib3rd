import { IParameterMapping } from '../expander';
import { Modules } from './modules';
export declare class ObjectSetReference {
    objectSetReference: string;
    private objectSetReferenceTag;
    constructor(objectSetReference: string);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): never;
    getDepth(): number;
    toString(): string;
}
//# sourceMappingURL=objectSetReference.d.ts.map