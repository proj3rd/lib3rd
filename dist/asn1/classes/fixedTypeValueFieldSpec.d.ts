import { AsnType } from './asnType';
import { Optionality } from './optionality';
import { PrimitiveFieldName } from './primitiveFieldName';
export declare class FixedTypeValueFieldSpec {
    fieldReference: PrimitiveFieldName;
    asnType: AsnType;
    unique: boolean;
    optionality: Optionality | undefined;
    private fixedTypeValueFieldSpecTag;
    constructor(fieldRerence: PrimitiveFieldName, asnType: AsnType, unique: boolean, optionality?: Optionality);
    toString(): string;
}
//# sourceMappingURL=fixedTypeValueFieldSpec.d.ts.map