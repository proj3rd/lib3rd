import { BooleanValue } from './booleanValue';
import { IntegerValue } from './integerValue';

export type Value = BuiltinValue;

export type BuiltinValue = BooleanValue | IntegerValue | string;
