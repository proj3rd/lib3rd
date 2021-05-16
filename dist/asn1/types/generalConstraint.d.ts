import { ContentsConstraint } from "../classes/contentsConstraint";
import { InnerTypeConstraints } from "../classes/innerTypeConstraints";
import { TableConstraint } from "./tableConstraint";
export declare type GeneralConstraint = ContentsConstraint | InnerTypeConstraints | TableConstraint;
export declare function GeneralConstraintFromObject(obj: unknown): GeneralConstraint;
//# sourceMappingURL=generalConstraint.d.ts.map