import { AsnType } from './asnType';
import { Value } from './value';
/**
 * `Optionality` class indicates that `ComponentType` is optional.
 * For an optional component type without a default value,
 * use a singleton instance: `Optionality.getInstance()`.
 * For an optional componenttype with a default value,
 * instantiate a new instance: `new Optionality(defaultValue)`.
 */
export declare class Optionality {
    defaultValue: AsnType | Value | undefined;
    private optionalityTag;
    constructor(defaultValue?: AsnType | Value);
    getDefaultValue(): AsnType | Value | undefined;
    toString(): string;
}
//# sourceMappingURL=optionality.d.ts.map