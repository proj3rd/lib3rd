import { BooleanValue } from './booleanValue';
import { IntegerValue } from './integerValue';
import { ObjectIdentifierValue } from './objectIdentifierValue';
import { ValueReference } from './valueReference';
export declare type BuiltinValue = BooleanValue | IntegerValue | ObjectIdentifierValue | string;
export declare type DefinedValue = ValueReference;
export declare type ReferencedValue = DefinedValue;
export declare type Value = BuiltinValue | ReferencedValue;
//# sourceMappingURL=value.d.ts.map