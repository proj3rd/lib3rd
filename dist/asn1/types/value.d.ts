import { BuiltinValue } from "./builtinValue";
import { ReferencedValue } from '../types/referencedValue';
export declare type Value = BuiltinValue | ReferencedValue;
export declare function ValueFromObject(obj: unknown): Value;
//# sourceMappingURL=value.d.ts.map