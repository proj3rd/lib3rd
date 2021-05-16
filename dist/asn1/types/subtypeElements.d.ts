import { SizeConstraint } from "../classes/sizeConstraint";
import { ValueRange } from "../classes/valueRange";
import { SingleValue } from "./singleValue";
import { TypeConstraint } from "./typeConstraint";
export declare type SubtypeElements = SizeConstraint | SingleValue | ValueRange | TypeConstraint;
export declare function SubtypeElementsFromObject(obj: unknown): SubtypeElements;
//# sourceMappingURL=subtypeElements.d.ts.map