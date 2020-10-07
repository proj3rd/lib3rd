import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _ElementSetSpecs } from '../types';
import { ElementSetSpecsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * elementSetSpecs: rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec)?)?
 * ```
 */
export declare class ElementSetSpecsVisitor extends AbstractParseTreeVisitor<_ElementSetSpecs> implements grammar3rdVisitor<_ElementSetSpecs> {
    visitChildren(ctx: ElementSetSpecsContext): _ElementSetSpecs;
    protected defaultResult(): _ElementSetSpecs;
}
//# sourceMappingURL=elementSetSpecsVisitor.d.ts.map