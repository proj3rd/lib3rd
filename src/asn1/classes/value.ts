import { BooleanValue } from './booleanValue';
import { IntegerValue } from './integerValue';
import { ObjectIdentifierValue } from './objectIdentifierValue';
import { ValueReference } from './valueReference';

export type BuiltinValue =
  | BooleanValue
  | IntegerValue
  | ObjectIdentifierValue
  | string;

export type DefinedValue = ValueReference;

export type ReferencedValue = DefinedValue;

export type Value = BuiltinValue | ReferencedValue;
