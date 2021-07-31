import { ObjectSet } from './classes/objectSet';
import { AsnType } from './types/asnType';
import { BuiltinType } from './types/builtinType';
import { Value } from './types/value';
export declare type SimpleTableConstraint = ObjectSet;
export declare type ObjectIdComponents = BuiltinType | string;
export interface ITypeAndValue {
    asnType: AsnType;
    value: Value;
}
//# sourceMappingURL=types.d.ts.map