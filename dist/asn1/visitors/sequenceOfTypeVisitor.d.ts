import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SequenceOfType } from '../classes/sequenceOfType';
import { SequenceOfTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * sequenceOfType: SEQUENCE_LITERAL (L_PARAN (constraint | sizeConstraint) R_PARAN)? OF_LITERAL (asnType | namedType )
 * ```
 */
export declare class SequenceOfTypeVisitor extends AbstractParseTreeVisitor<SequenceOfType> implements ASN_3gppVisitor<SequenceOfType> {
    visitChildren(ctx: SequenceOfTypeContext): SequenceOfType;
    protected defaultResult(): SequenceOfType;
}
//# sourceMappingURL=sequenceOfTypeVisitor.d.ts.map