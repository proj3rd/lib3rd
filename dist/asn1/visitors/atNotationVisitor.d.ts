import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AtNotation } from '../classes/atNotation';
import { AtNotationContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * atNotation: (A_ROND | (A_ROND_DOT level)) componentIdList
 * ```
 */
export declare class AtNotationVisitor extends AbstractParseTreeVisitor<AtNotation> implements ASN_3gppVisitor<AtNotation> {
    visitChildren(ctx: AtNotationContext): AtNotation;
    protected defaultResult(): AtNotation;
}
//# sourceMappingURL=atNotationVisitor.d.ts.map