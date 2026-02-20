import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SequenceType } from '../classes/sequenceType';
import { SequenceTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * sequenceType: SEQUENCE_LITERAL L_BRACE
 *   (extensionAndException  optionalExtensionMarker | componentTypeLists)?
 *   R_BRACE
 * ```
 */
export declare class SequenceTypeVisitor extends AbstractParseTreeVisitor<SequenceType> implements grammar3rdVisitor<SequenceType> {
    visitChildren(ctx: SequenceTypeContext): SequenceType;
    protected defaultResult(): SequenceType;
}
//# sourceMappingURL=sequenceTypeVisitor.d.ts.map