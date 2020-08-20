import { AsnType, BuiltinType } from './classes/asnType';
import { ComponentRelationConstraint } from './classes/componentRelationConstraint';
import { ContentsConstraint } from './classes/contentsConstraint';
import { ExtensionMarker } from './classes/extensionMarker';
import { ExternalObjectSetReference } from './classes/externalObjectSetReference';
import { InnerTypeConstraints } from './classes/innerTypeConstraints';
import { ObjectClassReference } from './classes/objectClassReference';
import { ObjectSet } from './classes/objectSet';
import { ObjectSetReference } from './classes/objectSetReference';
import { SizeConstraint } from './classes/sizeConstraint';
import { SubtypeConstraint } from './classes/subtypeConstraint';
import { Unions } from './classes/unions';
import { BuiltinValue } from './classes/value';
import { ValueRange } from './classes/valueRange';
export declare type _ConstraintSpec = _GeneralConstraint | SubtypeConstraint;
export declare type DefinedObjectSet = ExternalObjectSetReference | ObjectSetReference;
export declare type _Elements = _SubtypeElements | _ObjectSetElements;
export declare type _ElementSetSpec = Unions;
export declare type _ElementSetSpecs = Array<_ElementSetSpec | ExtensionMarker>;
export declare type _GeneralConstraint = ContentsConstraint | InnerTypeConstraints | TableConstraint;
export declare type Governor = AsnType | ObjectClassReference;
export declare type INamedBit = INamedNumber;
export interface INamedNumber {
    name: string;
    valueLiteral: string;
}
export declare type _IntersectionElements = _Elements;
export declare type _Intersections = _IntersectionElements[];
export declare type ObjectIdComponents = BuiltinType | string;
export declare type _ObjectSetElements = DefinedObjectSet;
export declare type ParamGovernor = Governor | string;
export declare type SimpleTableConstraint = ObjectSet;
export declare type _SubtypeElements = SizeConstraint | BuiltinValue | ValueRange;
export declare type TableConstraint = SimpleTableConstraint | ComponentRelationConstraint;
//# sourceMappingURL=types.d.ts.map