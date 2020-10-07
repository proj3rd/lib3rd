import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _ElementSetSpec } from '../types';
import { ElementSetSpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * elementSetSpec: unions | ALL_LITERAL exclusions
 * ```
 */
export declare class ElementSetSpecVisitor extends AbstractParseTreeVisitor<_ElementSetSpec> implements grammar3rdVisitor<_ElementSetSpec> {
    visitChildren(ctx: ElementSetSpecContext): _ElementSetSpec;
    protected defaultResult(): _ElementSetSpec;
}
//# sourceMappingURL=elementSetSpecVisitor.d.ts.map