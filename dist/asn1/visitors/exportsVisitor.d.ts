import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExportsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { Exports } from '../types/exports';
/**
 * # Grammar
 * ```
 * exports: (
 *   EXPORST_LITERAL symbolsExported SEMI_COLON |
 *   EXPORTS LITERAL ALL_LITERAL SEMI_COLON
 * )?
 * ```
 */
export declare class ExportsVisitor extends AbstractParseTreeVisitor<Exports | null> implements grammar3rdVisitor<Exports | null> {
    visitChildren(ctx: ExportsContext): Exports | null;
    protected defaultResult(): Exports | null;
}
//# sourceMappingURL=exportsVisitor.d.ts.map