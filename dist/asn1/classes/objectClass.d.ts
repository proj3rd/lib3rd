import { FixedTypeValueFieldSpec } from './fixedTypeValueFieldSpec';
import { Syntax } from './syntax';
import { TypeFieldSpec } from './typeFieldSpec';
export declare type ObjectClass = ObjectClassDefinition;
/**
 * X.681 clause 9.3
 * ```
 * CLASS { fieldSpec[0], ..., fieldSpec[n-1] } WITH SYNTAX { syntax[0] ... syntax[n-1] }
 * ```
 */
export declare class ObjectClassDefinition {
    fieldSpecs: FieldSpec[];
    syntaxList: Syntax[];
    constructor(fieldSpecs: FieldSpec[], syntaxList: Syntax[]);
    toString(): string;
}
export declare type FieldSpec = TypeFieldSpec | FixedTypeValueFieldSpec;
//# sourceMappingURL=objectClass.d.ts.map