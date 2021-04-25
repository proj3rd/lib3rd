import { IParameterMapping } from '../expander';
import { Modules } from './modules';
export declare class ExternalObjectSetReference {
    moduleReference: string;
    objectSetReference: string;
    private externalObjectSetReferenceTag;
    constructor(moduleReference: string, objectSetReference: string);
    /**
     * Find an Assignment indicated by ExternalObjectSetReference and
     * returns an expanded copy of it.
     * @param modules
     * @param parameterMappings
     */
    expand(modules: Modules, parameterMappings: IParameterMapping[]): this | import("./asnType").AsnType | import("./objectSet").ObjectSet | import("./objectClass").ObjectClassDefinition;
    getDepth(): number;
    toString(): string;
}
//# sourceMappingURL=externalObjectSetReference.d.ts.map