import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _Elements } from '../types';
import { ElementsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * elements: subtypeElements
 * ```
 */
export declare class ElementsVisitor extends AbstractParseTreeVisitor<_Elements> implements ASN_3gppVisitor<_Elements> {
    visitChildren(ctx: ElementsContext): _Elements;
    protected defaultResult(): _Elements;
}
//# sourceMappingURL=elementsVisitor.d.ts.map