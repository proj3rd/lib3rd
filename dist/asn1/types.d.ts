import { AsnType, BuiltinType } from './classes/asnType';
import { ComponentRelationConstraint } from './classes/componentRelationConstraint';
import { ContentsConstraint } from './classes/contentsConstraint';
import { ExtensionMarker } from './classes/extensionMarker';
import { ExternalObjectSetReference } from './classes/externalObjectSetReference';
import { InnerTypeConstraints } from './classes/innerTypeConstraints';
import { ObjectClass } from './classes/objectClass';
import { ObjectClassAssignment } from './classes/objectClassAssignment';
import { ObjectClassReference } from './classes/objectClassReference';
import { ObjectSet } from './classes/objectSet';
import { ObjectSetAssignment } from './classes/objectSetAssignment';
import { ObjectSetReference } from './classes/objectSetReference';
import { ParameterizedTypeAssignment } from './classes/parameterizedTypeAssignment';
import { SizeConstraint } from './classes/sizeConstraint';
import { SubtypeConstraint } from './classes/subtypeConstraint';
import { TypeAssignment } from './classes/typeAssignment';
import { Unions } from './classes/unions';
import { Value } from './classes/value';
import { ValueAssignment } from './classes/valueAssignment';
import { ValueRange } from './classes/valueRange';
export declare type Assignment = TypeAssignment | ObjectClassAssignment | ObjectSetAssignment | ParameterizedTypeAssignment | ValueAssignment;
export declare type SimpleTableConstraint = ObjectSet;
export declare type TableConstraint = SimpleTableConstraint | ComponentRelationConstraint;
export declare type _GeneralConstraint = ContentsConstraint | InnerTypeConstraints | TableConstraint;
export declare type _ConstraintSpec = _GeneralConstraint | SubtypeConstraint;
export declare type DefinedObjectSet = ExternalObjectSetReference | ObjectSetReference;
export declare type SingleValue = Value;
export declare type TypeConstraint = AsnType;
export declare type _SubtypeElements = SizeConstraint | SingleValue | ValueRange | TypeConstraint;
export declare type _ObjectSetElements = DefinedObjectSet;
export declare type _Elements = _SubtypeElements | _ObjectSetElements | AsnType | ObjectClass;
export declare type _ElementSetSpec = Unions;
export declare type _ElementSetSpecs = Array<_ElementSetSpec | ExtensionMarker>;
export declare type Governor = AsnType | ObjectClassReference;
export interface INamedNumber {
    name: string;
    valueLiteral: string;
}
export declare type INamedBit = INamedNumber;
export declare type _IntersectionElements = _Elements;
export declare type _Intersections = _IntersectionElements[];
export declare type ObjectIdComponents = BuiltinType | string;
export declare type ParamGovernor = Governor | string;
export interface ITypeAndValue {
    asnType: AsnType;
    value: Value;
}
//# sourceMappingURL=types.d.ts.map