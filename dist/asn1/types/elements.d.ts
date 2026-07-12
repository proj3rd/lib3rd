import { ObjectClass } from "../classes/objectClass";
import { AsnType } from "./asnType";
import { ObjectSetElements } from "./objectSetElements";
import { SubtypeElements } from "./subtypeElements";
export declare type Elements = SubtypeElements | ObjectSetElements | AsnType | ObjectClass;
export declare function ElementsFromObject(obj: unknown): Elements;
//# sourceMappingURL=elements.d.ts.map