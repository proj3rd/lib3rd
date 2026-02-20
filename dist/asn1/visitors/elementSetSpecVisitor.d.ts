import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ElementSetSpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ElementSetSpec } from '../types/elementSetSpec';
/**
 * # Grammar
 * ```
 * elementSetSpec: unions | ALL_LITERAL exclusions
 * ```
 */
export declare class ElementSetSpecVisitor extends AbstractParseTreeVisitor<ElementSetSpec> implements grammar3rdVisitor<ElementSetSpec> {
    visitChildren(ctx: ElementSetSpecContext): ElementSetSpec;
    protected defaultResult(): ElementSetSpec;
}
//# sourceMappingURL=elementSetSpecVisitor.d.ts.map