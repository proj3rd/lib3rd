import { DefinedObjectClass } from "../classes/asnType";
import { ObjectSet } from "../classes/objectSet";
import { AsnType } from "./asnType";
import { Value } from "./value";
export declare type ActualParameter = AsnType | Value | DefinedObjectClass | ObjectSet;
export declare function ActualParameterFromObject(obj: unknown): ActualParameter;
//# sourceMappingURL=actualParamter.d.ts.map