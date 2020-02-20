import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { UnionsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ElementsTypes } from './elements';
/**
 * ANTLR4 grammar
 * ```
 * unions :   (intersections) (unionMark intersections)*
 * ```
 */
export declare class UnionsVisitor extends AbstractParseTreeVisitor<ElementsTypes[]> implements ASN_3gppVisitor<ElementsTypes[]> {
    defaultResult(): ElementsTypes[];
    visitChildren(unionsCtx: UnionsContext): ElementsTypes[];
}
