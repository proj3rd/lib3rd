import { BooleanValue } from '../classes/booleanValue';
import { IntegerValue } from '../classes/integerValue';
import { ObjectIdentifierValue } from '../classes/objectIdentifierValue';
export declare type BuiltinValue = BooleanValue | IntegerValue | ObjectIdentifierValue | string;
export declare function BuiltinValueFromObject(obj: unknown): BuiltinValue;
//# sourceMappingURL=builtinValue.d.ts.map