import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ElementsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { Elements } from '../types/elements';
/**
 * # Grammar
 * ```
 * elements: subtypeElements
 * ```
 */
export declare class ElementsVisitor extends AbstractParseTreeVisitor<Elements> implements grammar3rdVisitor<Elements> {
    visitChildren(ctx: ElementsContext): Elements;
    protected defaultResult(): Elements;
}
//# sourceMappingURL=elementsVisitor.d.ts.map