import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _ElementSetSpecs } from '../types';
import { ElementSetSpecsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * elementSetSpecs: rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec)?)?
 * ```
 */
export declare class ElementSetSpecsVisitor extends AbstractParseTreeVisitor<_ElementSetSpecs> implements ASN_3gppVisitor<_ElementSetSpecs> {
    visitChildren(ctx: ElementSetSpecsContext): _ElementSetSpecs;
    protected defaultResult(): _ElementSetSpecs;
}
//# sourceMappingURL=elementSetSpecsVisitor.d.ts.map