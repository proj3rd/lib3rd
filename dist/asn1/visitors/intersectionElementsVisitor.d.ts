import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _IntersectionElements } from '../types';
import { IntersectionElementsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * intersectionElements: elements (exclusions)?
 * ```
 */
export declare class IntersectionElementsVisitor extends AbstractParseTreeVisitor<_IntersectionElements> implements ASN_3gppVisitor<_IntersectionElements> {
    visitChildren(ctx: IntersectionElementsContext): _IntersectionElements;
    protected defaultResult(): _IntersectionElements;
}
//# sourceMappingURL=intersectionElementsVisitor.d.ts.map