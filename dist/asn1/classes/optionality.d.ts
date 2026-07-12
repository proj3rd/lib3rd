import { AsnType } from '../types/asnType';
import { Value } from '../types/value';
/**
 * `Optionality` class indicates that `ComponentType` is optional.
 */
export declare class Optionality {
    defaultValue: AsnType | Value | undefined;
    optionalityTag: boolean;
    constructor(defaultValue?: AsnType | Value);
    static fromObject(obj: unknown): Optionality;
    getDefaultValue(): AsnType | Value | undefined;
    toString(): string;
}
//# sourceMappingURL=optionality.d.ts.map