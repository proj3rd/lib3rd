import { BitStringType } from './bitStringType';
import { BooleanType } from './booleanType';
import { CharacterStringType } from './characterStringType';
import { ChoiceType } from './choiceType';
import { EnumeratedType } from './enumeratedType';
import { ExternalTypeReference } from './externalTypeReference';
import { IntegerType } from './integerType';
import { NullType } from './nullType';
import { ObjectClassFieldType } from './objectClassFieldType';
import { ObjectClassReference } from './objectClassReference';
import { ObjectIdentifierType } from './objectIdentifierType';
import { OctetStringType } from './octetStringType';
import { ParameterizedType } from './parameterizedType';
import { SequenceOfType } from './sequenceOfType';
import { SequenceType } from './sequenceType';
import { TypeReference } from './typeReference';

export type BuiltinType =
  | OctetStringType
  | BitStringType
  | CharacterStringType
  | ChoiceType
  | EnumeratedType
  | IntegerType
  | SequenceType
  | SequenceOfType
  // SetType |
  // SetOfType |
  | ObjectIdentifierType
  | ObjectClassFieldType
  | BooleanType
  | NullType;

export type DefinedType =
  | ExternalTypeReference
  | TypeReference
  | ParameterizedType;
// ParamterizedValueSetType

export type ReferencedType = DefinedType;

export type AsnType = BuiltinType | ReferencedType;

export type DefinedObjectClass = ObjectClassReference;
// ExternalObjectClassReference
//  UsefuleObjectClassReference
