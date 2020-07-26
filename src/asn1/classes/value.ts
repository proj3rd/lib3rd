import { BooleanValue } from './booleanValue';
import { IntegerValue } from './integerValue';
import { ObjectIdentifierValue } from './objectIdentifierValue';

export type Value = BuiltinValue;

export type BuiltinValue =
  | BooleanValue
  | IntegerValue
  | ObjectIdentifierValue
  | string;
