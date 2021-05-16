import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RootElementSetSpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ElementSetSpec } from '../types/elementSetSpec';
/**
 * # Grammar
 * ```
 * rootElementSetSpec: elementSetSpec
 * ```
 */
export declare class RootElementSetSpecVisitor extends AbstractParseTreeVisitor<ElementSetSpec> implements grammar3rdVisitor<ElementSetSpec> {
    visitChildren(ctx: RootElementSetSpecContext): ElementSetSpec;
    protected defaultResult(): ElementSetSpec;
}
//# sourceMappingURL=rootElementSetSpecVisitor.d.ts.map