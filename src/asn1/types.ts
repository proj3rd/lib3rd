import { AsnType, BuiltinType } from './classes/asnType';
import { ComponentRelationConstraint } from './classes/componentRelationConstraint';
import { ExternalObjectSetReference } from './classes/externalObjectSetReference';
import { ObjectClassReference } from './classes/objectClassReference';
import { ObjectSet } from './classes/objectSet';
import { ObjectSetReference } from './classes/objectSetReference';

export type DefinedObjectSet = ExternalObjectSetReference | ObjectSetReference;

export type Governor = AsnType | ObjectClassReference;

export type INamedBit = INamedNumber;

export interface INamedNumber {
  name: string;
  valueLiteral: string;
}

export type ObjectIdComponents = BuiltinType | string;

export type ParamGovernor = Governor | string;

export type SimpleTableConstraint = ObjectSet;

export type TableConstraint =
  | SimpleTableConstraint
  | ComponentRelationConstraint;
