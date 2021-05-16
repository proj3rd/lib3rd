import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { IntersectionsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { Intersections } from '../types/intersections';
/**
 * # Grammar
 * ```
 * intersections: (intersectionElements) (intersectionMark intersectionElements)*
 * ```
 */
export declare class IntersectionsVisitor extends AbstractParseTreeVisitor<Intersections> implements grammar3rdVisitor<Intersections> {
    visitChildren(ctx: IntersectionsContext): Intersections;
    protected defaultResult(): Intersections;
}
//# sourceMappingURL=intersectionsVisitor.d.ts.map