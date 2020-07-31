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

export type _ConstraintSpec = _GeneralConstraint | SubtypeConstraint;

export type DefinedObjectSet = ExternalObjectSetReference | ObjectSetReference;

// X.680 clause 50.5
export type _Elements = _SubtypeElements | _ObjectSetElements;

export type _ElementSetSpec = Unions;

export type _ElementSetSpecs = Array<_ElementSetSpec | ExtensionMarker>;

export type _GeneralConstraint =
  | ContentsConstraint
  | InnerTypeConstraints
  | TableConstraint;

export type Governor = AsnType | ObjectClassReference;

export type INamedBit = INamedNumber;

export interface INamedNumber {
  name: string;
  valueLiteral: string;
}

export type _IntersectionElements = _Elements;

export type _Intersections = _IntersectionElements[];

export type ObjectIdComponents = BuiltinType | string;

// X.681 clause 12.10
export type _ObjectSetElements = DefinedObjectSet;
// Object
// ObjectSetFromObjects
// ParameterizedObjectSet

export type ParamGovernor = Governor | string;

export type SimpleTableConstraint = ObjectSet;

export type _SubtypeElements = SizeConstraint | BuiltinValue | ValueRange;

export type TableConstraint =
  | SimpleTableConstraint
  | ComponentRelationConstraint;
