import { BitStringType } from './bitStringType';
import { BooleanType } from './booleanType';
import { ChoiceType } from './choiceType';
import { EnumeratedType } from './enumeratedType';
import { ExternalTypeReference } from './externalTypeReference';
import { IntegerType } from './integerType';
import { NullType } from './nullType';
import { OctetStringType } from './octetStringType';
import { SequenceOfType } from './sequenceOfType';
import { SequenceType } from './sequenceType';
import { TypeReference } from './typeReference';

export type AsnType = BuiltinType | ReferencedType;

export type BuiltinType =
  | OctetStringType
  | BitStringType
  | ChoiceType
  | EnumeratedType
  | IntegerType
  | SequenceType
  | SequenceOfType
  // SetType |
  // SetOfType |
  // ObjectIdentifierType |
  // ObjectClassFieldType |
  | BooleanType
  | NullType;

export type ReferencedType = DefinedType;

export type DefinedType = ExternalTypeReference | TypeReference;
// ParameterizedType |
// ParamterizedValueSetType
