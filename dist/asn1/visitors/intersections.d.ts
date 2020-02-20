import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { IntersectionsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ElementsTypes } from './elements';
/**
 * ANTLR4 grammar
 * ```
 * intersections : (intersectionElements) (intersectionMark intersectionElements)*
 * ```
 */
export declare class IntersectionsVisitor extends AbstractParseTreeVisitor<ElementsTypes> implements ASN_3gppVisitor<ElementsTypes> {
    defaultResult(): ElementsTypes;
    visitChildren(intersectionsCtx: IntersectionsContext): ElementsTypes;
}
