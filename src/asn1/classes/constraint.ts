import { ContentsConstraint } from './contentsConstraint';
import { ExtensionMarker } from './extensionMarker';
import { InnerTypeConstraints } from './innerTypeConstraints';
import { SizeConstraint } from './sizeConstraint';
import { BuiltinValue } from './value';
import { ValueRange } from './valueRange';

export type _Constraint = _ConstraintSpec;

export type _ConstraintSpec = _GeneralConstraint | _SubtypeConstraint;

export type _GeneralConstraint = ContentsConstraint | InnerTypeConstraints;

export type _SubtypeConstraint = _ElementSetSpecs;

export type _ElementSetSpecs = Array<_ElementSetSpec | ExtensionMarker>;

export type _ElementSetSpec = _Unions;

export type _Unions = _Intersections[];

export type _Intersections = _IntersectionElements[];

export type _IntersectionElements = _Elements;

export type _Elements = _SubtypeElements;

export type _SubtypeElements = SizeConstraint | BuiltinValue | ValueRange;
