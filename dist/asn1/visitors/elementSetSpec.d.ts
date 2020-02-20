import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ElementSetSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ElementsTypes } from './elements';
/**
 * ANTLR4 grammar
 * ```
 * elementSetSpec : unions | ALL_LITERAL exclusions
 * ```
 */
export declare class ElementSetSpecVisitor extends AbstractParseTreeVisitor<ElementsTypes[]> implements ASN_3gppVisitor<ElementsTypes[]> {
    defaultResult(): ElementsTypes[];
    visitChildren(elementSetSpecCtx: ElementSetSpecContext): ElementsTypes[];
}
