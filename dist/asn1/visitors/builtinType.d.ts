import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { BuiltinTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnBoolean } from '../classes/asnBoolean';
import { BitString } from '../classes/bitString';
import { Choice } from '../classes/choice';
import { Enumerated } from '../classes/enumerated';
import { Integer } from '../classes/integer';
import { Null } from '../classes/null';
import { OctetString } from '../classes/octetString';
import { Sequence } from '../classes/sequence';
import { SequenceOf } from '../classes/sequenceOf';
export declare type BuiltinType = AsnBoolean | BitString | Choice | Enumerated | Integer | Null | OctetString | Sequence | SequenceOf;
/**
 * ANTLR4 grammar
 * builtinType :
 *    octetStringType
 *  | bitStringType
 *  | choiceType
 *  | enumeratedType
 *  | integerType
 *  | sequenceType
 *  | sequenceOfType
 *  | setType
 *  | setOfType
 *  | objectidentifiertype
 *  | objectClassFieldType
 *  | BOOLEAN_LITERAL
 *  | NULL_LITERAL
 */
export declare class BuiltinTypeVisitor extends AbstractParseTreeVisitor<BuiltinType> implements ASN_3gppVisitor<BuiltinType> {
    defaultResult(): BuiltinType;
    visitChildren(builtinTypeCtx: BuiltinTypeContext): BuiltinType;
}
