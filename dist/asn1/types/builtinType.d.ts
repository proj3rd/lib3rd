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
export declare type BuiltinType = OctetStringType | BitStringType | CharacterStringType | ChoiceType | EnumeratedType | IntegerType | SequenceType | SequenceOfType | ObjectIdentifierType | ObjectClassFieldType | BooleanType | NullType;
export declare function BuiltinTypeFromObject(obj: unknown): BuiltinType;
//# sourceMappingURL=builtinType.d.ts.map