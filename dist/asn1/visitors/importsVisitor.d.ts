import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Imports } from '../classes/imports';
import { ImportsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * imports: (IMPORTS_LITERAL symbolsImported SEMI_COLON)?
 * ```
 */
export declare class ImportsVisitor extends AbstractParseTreeVisitor<Imports | null> implements ASN_3gppVisitor<Imports | null> {
    visitChildren(ctx: ImportsContext): Imports | null;
    protected defaultResult(): Imports | null;
}
//# sourceMappingURL=importsVisitor.d.ts.map