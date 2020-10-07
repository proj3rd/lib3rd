import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _IntersectionElements } from '../types';
import { IntersectionElementsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * intersectionElements: elements (exclusions)?
 * ```
 */
export declare class IntersectionElementsVisitor extends AbstractParseTreeVisitor<_IntersectionElements> implements grammar3rdVisitor<_IntersectionElements> {
    visitChildren(ctx: IntersectionElementsContext): _IntersectionElements;
    protected defaultResult(): _IntersectionElements;
}
//# sourceMappingURL=intersectionElementsVisitor.d.ts.map