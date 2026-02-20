import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ReferencedTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ReferencedType } from '../types/referencedType';
/**
 * # Grammar
 * ```
 * referencedType: definedType
 * ```
 */
export declare class ReferencedTypeVisitor extends AbstractParseTreeVisitor<ReferencedType> implements grammar3rdVisitor<ReferencedType> {
    visitChildren(ctx: ReferencedTypeContext): ReferencedType;
    protected defaultResult(): ReferencedType;
}
//# sourceMappingURL=referencedTypeVisitor.d.ts.map