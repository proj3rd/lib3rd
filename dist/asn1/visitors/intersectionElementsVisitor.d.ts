import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { IntersectionElementsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { IntersectionElements } from '../types/intersectionElements';
/**
 * # Grammar
 * ```
 * intersectionElements: elements (exclusions)?
 * ```
 */
export declare class IntersectionElementsVisitor extends AbstractParseTreeVisitor<IntersectionElements> implements grammar3rdVisitor<IntersectionElements> {
    visitChildren(ctx: IntersectionElementsContext): IntersectionElements;
    protected defaultResult(): IntersectionElements;
}
//# sourceMappingURL=intersectionElementsVisitor.d.ts.map