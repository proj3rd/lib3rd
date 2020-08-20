import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _Intersections } from '../types';
import { IntersectionsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * intersections: (intersectionElements) (intersectionMark intersectionElements)*
 * ```
 */
export declare class IntersectionsVisitor extends AbstractParseTreeVisitor<_Intersections> implements ASN_3gppVisitor<_Intersections> {
    visitChildren(ctx: IntersectionsContext): _Intersections;
    protected defaultResult(): _Intersections;
}
//# sourceMappingURL=intersectionsVisitor.d.ts.map