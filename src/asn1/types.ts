import { BuiltinType } from './classes/asnType';
import { ComponentRelationConstraint } from './classes/componentRelationConstraint';
import { ExternalObjectSetReference } from './classes/externalObjectSetReference';
import { ObjectClassReference } from './classes/objectClassReference';
import { ObjectSet } from './classes/objectSet';
import { ObjectSetReference } from './classes/objectSetReference';
import { AsnType } from './types/asnType';
import { DefinedObjectSet } from './types/definedObjectSet';
import { Value } from './types/value';

export type SimpleTableConstraint = ObjectSet;

export type Governor = AsnType | ObjectClassReference;

export type ObjectIdComponents = BuiltinType | string;

export type ParamGovernor = Governor | string;

export interface ITypeAndValue {
  asnType: AsnType;
  value: Value;
}
