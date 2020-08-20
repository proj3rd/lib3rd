import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _ElementSetSpec } from '../types';
import { ElementSetSpecContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * elementSetSpec: unions | ALL_LITERAL exclusions
 * ```
 */
export declare class ElementSetSpecVisitor extends AbstractParseTreeVisitor<_ElementSetSpec> implements ASN_3gppVisitor<_ElementSetSpec> {
    visitChildren(ctx: ElementSetSpecContext): _ElementSetSpec;
    protected defaultResult(): _ElementSetSpec;
}
//# sourceMappingURL=elementSetSpecVisitor.d.ts.map