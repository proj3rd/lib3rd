import { Sequence } from '../classes/sequence';
/**
 * ANTLR4 grammar
 * ```
 * sequenceType :SEQUENCE_LITERAL L_BRACE
 * (extensionAndException  optionalExtensionMarker | componentTypeLists )?
 * R_BRACE
 * ```
 */
export declare class SequenceTypeVisitor {
    visitChildren(sequenceTypeCtx: any): Sequence;
}
