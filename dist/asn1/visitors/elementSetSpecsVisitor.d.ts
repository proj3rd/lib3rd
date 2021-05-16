import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ElementSetSpecsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ElementSetSpecs } from '../types/elementSetSpecs';
/**
 * # Grammar
 * ```
 * elementSetSpecs: rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec)?)?
 * ```
 */
export declare class ElementSetSpecsVisitor extends AbstractParseTreeVisitor<ElementSetSpecs> implements grammar3rdVisitor<ElementSetSpecs> {
    visitChildren(ctx: ElementSetSpecsContext): ElementSetSpecs;
    protected defaultResult(): ElementSetSpecs;
}
//# sourceMappingURL=elementSetSpecsVisitor.d.ts.map