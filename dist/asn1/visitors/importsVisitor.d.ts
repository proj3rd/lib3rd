import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Imports } from '../classes/imports';
import { ImportsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * imports: (IMPORTS_LITERAL symbolsImported SEMI_COLON)?
 * ```
 */
export declare class ImportsVisitor extends AbstractParseTreeVisitor<Imports | null> implements grammar3rdVisitor<Imports | null> {
    visitChildren(ctx: ImportsContext): Imports | null;
    protected defaultResult(): Imports | null;
}
//# sourceMappingURL=importsVisitor.d.ts.map