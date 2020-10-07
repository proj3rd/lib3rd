import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _Elements } from '../types';
import { ElementsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * elements: subtypeElements
 * ```
 */
export declare class ElementsVisitor extends AbstractParseTreeVisitor<_Elements> implements grammar3rdVisitor<_Elements> {
    visitChildren(ctx: ElementsContext): _Elements;
    protected defaultResult(): _Elements;
}
//# sourceMappingURL=elementsVisitor.d.ts.map