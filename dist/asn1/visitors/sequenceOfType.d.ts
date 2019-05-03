import { SequenceOf } from '../classes/sequenceOf';
/**
 * ANTLR4 grammar
 * ```
 * sequenceOfType  : SEQUENCE_LITERAL (L_PARAN (constraint | sizeConstraint) R_PARAN)? OF_LITERAL (asnType | namedType )
 * ```
 */
export declare class SequenceOfTypeVisitor {
    visitChildren(sequenceOfTypeCtx: any): SequenceOf;
}
