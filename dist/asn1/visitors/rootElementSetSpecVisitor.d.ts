import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _ElementSetSpec } from '../types';
import { RootElementSetSpecContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * rootElementSetSpec: elementSetSpec
 * ```
 */
export declare class RootElementSetSpecVisitor extends AbstractParseTreeVisitor<_ElementSetSpec> implements ASN_3gppVisitor<_ElementSetSpec> {
    visitChildren(ctx: RootElementSetSpecContext): _ElementSetSpec;
    protected defaultResult(): _ElementSetSpec;
}
//# sourceMappingURL=rootElementSetSpecVisitor.d.ts.map