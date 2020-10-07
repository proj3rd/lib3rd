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

export type Assignment =
  | TypeAssignment
  | ObjectClassAssignment
  | ObjectSetAssignment
  | ParameterizedTypeAssignment
  | ValueAssignment;

export type SimpleTableConstraint = ObjectSet;

export type TableConstraint =
  | SimpleTableConstraint
  | ComponentRelationConstraint;

export type _GeneralConstraint =
  | ContentsConstraint
  | InnerTypeConstraints
  | TableConstraint;

export type _ConstraintSpec = _GeneralConstraint | SubtypeConstraint;

export type DefinedObjectSet = ExternalObjectSetReference | ObjectSetReference;

export type SingleValue = Value;

export type TypeConstraint = AsnType;

export type _SubtypeElements =
  | SizeConstraint
  | SingleValue
  | ValueRange
  | TypeConstraint;

// X.681 clause 12.10
export type _ObjectSetElements = DefinedObjectSet;
// Object
// ObjectSetFromObjects
// ParameterizedObjectSet

// X.680 clause 50.5
export type _Elements =
  | _SubtypeElements
  | _ObjectSetElements
  // Valid after expand
  | AsnType
  | ObjectClass;

export type _ElementSetSpec = Unions;

export type _ElementSetSpecs = Array<_ElementSetSpec | ExtensionMarker>;

export type Governor = AsnType | ObjectClassReference;

export interface INamedNumber {
  name: string;
  valueLiteral: string;
}

export type INamedBit = INamedNumber;

export type _IntersectionElements = _Elements;

export type _Intersections = _IntersectionElements[];

export type ObjectIdComponents = BuiltinType | string;

export type ParamGovernor = Governor | string;

export interface ITypeAndValue {
  asnType: AsnType;
  value: Value;
}
