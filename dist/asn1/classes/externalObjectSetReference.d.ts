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
    expand(modules: Modules, parameterMappings: IParameterMapping[]): this | import("./octetStringType").OctetStringType | import("./bitStringType").BitStringType | import("./characterStringType").CharacterStringType | import("./choiceType").ChoiceType | import("./enumeratedType").EnumeratedType | import("./integerType").IntegerType | import("./sequenceType").SequenceType | import("./sequenceOfType").SequenceOfType | import("./objectIdentifierType").ObjectIdentifierType | import("./objectClassFieldType").ObjectClassFieldType | import("./booleanType").BooleanType | import("./nullType").NullType | import("./externalTypeReference").ExternalTypeReference | import("./typeReference").TypeReference | import("./parameterizedType").ParameterizedType | import("./objectSet").ObjectSet | import("./objectClass").ObjectClassDefinition;
    getDepth(): number;
    toString(): string;
}
//# sourceMappingURL=externalObjectSetReference.d.ts.map