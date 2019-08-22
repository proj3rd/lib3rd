import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SequenceTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { Sequence } from '../classes/sequence';
/**
 * ANTLR4 grammar
 * ```
 * sequenceType :SEQUENCE_LITERAL L_BRACE
 * (extensionAndException  optionalExtensionMarker | componentTypeLists )?
 * R_BRACE
 * ```
 */
export declare class SequenceTypeVisitor extends AbstractParseTreeVisitor<Sequence> implements ASN_3gppVisitor<Sequence> {
    defaultResult(): Sequence;
    visitChildren(sequenceTypeCtx: SequenceTypeContext): Sequence;
}
