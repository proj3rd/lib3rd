import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SequenceOfTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { SequenceOf } from '../classes/sequenceOf';
/**
 * ANTLR4 grammar
 * ```
 * sequenceOfType  : SEQUENCE_LITERAL (L_PARAN (constraint | sizeConstraint) R_PARAN)? OF_LITERAL (asnType | namedType )
 * ```
 */
export declare class SequenceOfTypeVisitor extends AbstractParseTreeVisitor<SequenceOf> implements ASN_3gppVisitor<SequenceOf> {
    defaultResult(): SequenceOf;
    visitChildren(sequenceOfTypeCtx: SequenceOfTypeContext): SequenceOf;
}
