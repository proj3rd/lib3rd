import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Exports } from '../classes/moduleDefinition';
import { ExportsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * exports: (
 *   EXPORST_LITERAL symbolsExported SEMI_COLON |
 *   EXPORTS LITERAL ALL_LITERAL SEMI_COLON
 * )?
 * ```
 */
export declare class ExportsVisitor extends AbstractParseTreeVisitor<Exports | null> implements ASN_3gppVisitor<Exports | null> {
    visitChildren(ctx: ExportsContext): Exports | null;
    protected defaultResult(): Exports | null;
}
//# sourceMappingURL=exportsVisitor.d.ts.map