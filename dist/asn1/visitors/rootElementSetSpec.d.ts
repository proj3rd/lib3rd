import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RootElementSetSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ElementsTypes } from './elements';
/**
 * ANTLR4 grammar
 * rootElementSetSpec : elementSetSpec
 */
export declare class RootElementSetSpecVisitor extends AbstractParseTreeVisitor<ElementsTypes[]> implements ASN_3gppVisitor<ElementsTypes[]> {
    defaultResult(): ElementsTypes[];
    visitChildren(rootElementSetSpecCtx: RootElementSetSpecContext): ElementsTypes[];
}
