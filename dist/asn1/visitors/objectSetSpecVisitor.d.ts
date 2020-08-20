import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _ElementSetSpecs } from '../types';
import { ObjectSetSpecContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * objectSetSpec :
 *     rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec )?)?
 *   | ELLIPSIS (COMMA additionalElementSetSpec )?
 * ```
 */
export declare class ObjectSetSpecVisitor extends AbstractParseTreeVisitor<_ElementSetSpecs> implements ASN_3gppVisitor<_ElementSetSpecs> {
    visitChildren(ctx: ObjectSetSpecContext): _ElementSetSpecs;
    protected defaultResult(): _ElementSetSpecs;
}
//# sourceMappingURL=objectSetSpecVisitor.d.ts.map