import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { IntersectionElementsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ElementsTypes } from './elements';
/**
 * ANTLR4 grammar
 * ```
 * intersectionElements : elements (exclusions)?
 * ```
 */
export declare class IntersectionElementsVisitor extends AbstractParseTreeVisitor<ElementsTypes> implements ASN_3gppVisitor<ElementsTypes> {
    defaultResult(): ElementsTypes;
    visitChildren(intersectionElementsCtx: IntersectionElementsContext): ElementsTypes;
}
