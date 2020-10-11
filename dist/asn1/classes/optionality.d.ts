import { AsnType } from './asnType';
import { Value } from './value';
/**
 * `Optionality` class indicates that `ComponentType` is optional.
 */
export declare class Optionality {
    defaultValue: AsnType | Value | undefined;
    private optionalityTag;
    constructor(defaultValue?: AsnType | Value);
    getDefaultValue(): AsnType | Value | undefined;
    toString(): string;
}
//# sourceMappingURL=optionality.d.ts.map