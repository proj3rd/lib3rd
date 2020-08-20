import { Optionality } from './optionality';
import { PrimitiveFieldName } from './primitiveFieldName';
export declare class TypeFieldSpec {
    fieldReference: PrimitiveFieldName;
    optionality: Optionality | undefined;
    private typeFieldSpecTag;
    constructor(fieldRerence: PrimitiveFieldName, optionality?: Optionality);
    toString(): string;
}
//# sourceMappingURL=typeFieldSpec.d.ts.map