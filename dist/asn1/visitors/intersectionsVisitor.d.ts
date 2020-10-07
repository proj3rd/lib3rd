import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _Intersections } from '../types';
import { IntersectionsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * intersections: (intersectionElements) (intersectionMark intersectionElements)*
 * ```
 */
export declare class IntersectionsVisitor extends AbstractParseTreeVisitor<_Intersections> implements grammar3rdVisitor<_Intersections> {
    visitChildren(ctx: IntersectionsContext): _Intersections;
    protected defaultResult(): _Intersections;
}
//# sourceMappingURL=intersectionsVisitor.d.ts.map