import { IParameterMapping } from '../expander';
import { Modules } from './modules';
export declare class ExternalObjectSetReference {
    moduleReference: string;
    objectSetReference: string;
    externalObjectSetReferenceTag: boolean;
    constructor(moduleReference: string, objectSetReference: string);
    static fromObject(obj: unknown): ExternalObjectSetReference;
    /**
     * Find an Assignment indicated by ExternalObjectSetReference and
     * returns an expanded copy of it.
     * @param modules
     * @param parameterMappings
     */
    expand(modules: Modules, parameterMappings: IParameterMapping[]): import("../types/asnType").AsnType | import("./objectSet").ObjectSet | this | import("./objectClass").ObjectClassDefinition;
    getDepth(): number;
    toString(): string;
}
//# sourceMappingURL=externalObjectSetReference.d.ts.map