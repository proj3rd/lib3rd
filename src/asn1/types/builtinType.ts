import _ from 'lodash';
import { BitStringType } from '../classes/bitStringType';
import { BooleanType } from '../classes/booleanType';
import { CharacterStringType } from '../classes/characterStringType';
import { ChoiceType } from '../classes/choiceType';
import { EnumeratedType } from '../classes/enumeratedType';
import { IntegerType } from '../classes/integerType';
import { NullType } from '../classes/nullType';
import { ObjectClassFieldType } from '../classes/objectClassFieldType';
import { ObjectIdentifierType } from '../classes/objectIdentifierType';
import { OctetStringType } from '../classes/octetStringType';
import { SequenceOfType } from '../classes/sequenceOfType';
import { SequenceType } from '../classes/sequenceType';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';

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

export function BuiltinTypeFromObject(obj: unknown): BuiltinType {
  const { octetStringTypeTag } = obj as OctetStringType;
  if (octetStringTypeTag) {
    return OctetStringType.fromObject(obj);
  }
  const { bitStringTypeTag } = obj as BitStringType;
  if (bitStringTypeTag) {
    return BitStringType.fromObject(obj);
  }
  const { characterStringTypeTag } = obj as CharacterStringType;
  if (characterStringTypeTag) {
    return CharacterStringType.fromObject(obj);
  }
  const { choiceTypeTag } = obj as ChoiceType;
  if (choiceTypeTag) {
    return ChoiceType.fromObject(obj);
  }
  const { enumeratedTypeTag } = obj as EnumeratedType;
  if (enumeratedTypeTag) {
    return EnumeratedType.fromObject(obj);
  }
  const { integerTypeTag } = obj as IntegerType;
  if (integerTypeTag) {
    return IntegerType.fromObject(obj);
  }
  const { sequenceTypeTag } = obj as SequenceType;
  if (sequenceTypeTag) {
    return SequenceType.fromObject(obj);
  }
  const { sequenceOfTypeTag } = obj as SequenceOfType;
  if (sequenceOfTypeTag) {
    return SequenceOfType.fromObject(obj);
  }
  const { objectIdentifierTypeTag } = obj as ObjectIdentifierType;
  if (objectIdentifierTypeTag) {
    return ObjectIdentifierType.fromObject(obj);
  }
  const { objectClassFieldType } = obj as ObjectClassFieldType;
  if (objectClassFieldType) {
    return ObjectClassFieldType.fromObject(obj);
  }
  const { booleanTypeTag } = obj as BooleanType;
  if (booleanTypeTag) {
    return BooleanType.fromObject(obj);
  }
  const { nullTypeTag } = obj as NullType;
  if (nullTypeTag) {
    return NullType.fromObject(obj);
  }
  throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
