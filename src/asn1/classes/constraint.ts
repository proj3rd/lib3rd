import { DefinedObjectSet, TableConstraint } from '../types';
import { ContentsConstraint } from './contentsConstraint';
import { ExtensionMarker } from './extensionMarker';
import { InnerTypeConstraints } from './innerTypeConstraints';
import { SizeConstraint } from './sizeConstraint';
import { BuiltinValue } from './value';
import { ValueRange } from './valueRange';

export type _Constraint = _ConstraintSpec;

export type _ConstraintSpec = _GeneralConstraint | _SubtypeConstraint;

export type _GeneralConstraint =
  | ContentsConstraint
  | InnerTypeConstraints
  | TableConstraint;

export type _SubtypeConstraint = _ElementSetSpecs;

export type _ElementSetSpecs = Array<_ElementSetSpec | ExtensionMarker>;

export type _ElementSetSpec = _Unions;

export type _Unions = _Intersections[];

export type _Intersections = _IntersectionElements[];

export type _IntersectionElements = _Elements;

// X.680 clause 50.5
export type _Elements = _SubtypeElements | _ObjectSetElements;

// X.681 clause 12.10
export type _ObjectSetElements = DefinedObjectSet;
// Object
// ObjectSetFromObjects
// ParameterizedObjectSet

export type _SubtypeElements = SizeConstraint | BuiltinValue | ValueRange;
