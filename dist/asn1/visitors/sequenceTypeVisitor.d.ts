import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SequenceType } from '../classes/sequenceType';
import { SequenceTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * sequenceType: SEQUENCE_LITERAL L_BRACE
 *   (extensionAndException  optionalExtensionMarker | componentTypeLists)?
 *   R_BRACE
 * ```
 */
export declare class SequenceTypeVisitor extends AbstractParseTreeVisitor<SequenceType> implements ASN_3gppVisitor<SequenceType> {
    visitChildren(ctx: SequenceTypeContext): SequenceType;
    protected defaultResult(): SequenceType;
}
//# sourceMappingURL=sequenceTypeVisitor.d.ts.map