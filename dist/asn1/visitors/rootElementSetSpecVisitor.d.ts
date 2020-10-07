import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _ElementSetSpec } from '../types';
import { RootElementSetSpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * rootElementSetSpec: elementSetSpec
 * ```
 */
export declare class RootElementSetSpecVisitor extends AbstractParseTreeVisitor<_ElementSetSpec> implements grammar3rdVisitor<_ElementSetSpec> {
    visitChildren(ctx: RootElementSetSpecContext): _ElementSetSpec;
    protected defaultResult(): _ElementSetSpec;
}
//# sourceMappingURL=rootElementSetSpecVisitor.d.ts.map