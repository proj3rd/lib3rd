import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { GlobalModuleReferenceContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * globalModuleReference: IDENTIFIER assignedIdentifier
 * ```
 */
export declare class GlobalModuleReferenceVisitor extends AbstractParseTreeVisitor<string> implements grammar3rdVisitor<string> {
    visitChildren(ctx: GlobalModuleReferenceContext): string;
    protected defaultResult(): string;
}
//# sourceMappingURL=globalModuleReferenceVisitor.d.ts.map