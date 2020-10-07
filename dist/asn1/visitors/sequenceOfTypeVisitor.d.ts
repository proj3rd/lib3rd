import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SequenceOfType } from '../classes/sequenceOfType';
import { SequenceOfTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * sequenceOfType:
 *   SEQUENCE_LITERAL (L_PARAN (constraint | sizeConstraint) R_PARAN)?
 *   OF_LITERAL (asnType | namedType )
 * ```
 */
export declare class SequenceOfTypeVisitor extends AbstractParseTreeVisitor<SequenceOfType> implements grammar3rdVisitor<SequenceOfType> {
    visitChildren(ctx: SequenceOfTypeContext): SequenceOfType;
    protected defaultResult(): SequenceOfType;
}
//# sourceMappingURL=sequenceOfTypeVisitor.d.ts.map