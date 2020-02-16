import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AdditionalElementSetSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ElementsTypes } from './elements';
/**
 * ANTLR4 grammar
 * rootElementSetSpec : elementSetSpec
 */
export declare class AdditionalElementSetSpecVisitor extends AbstractParseTreeVisitor<ElementsTypes[]> implements ASN_3gppVisitor<ElementsTypes[]> {
    defaultResult(): ElementsTypes[];
    visitChildren(additionalElementSetSpecCtx: AdditionalElementSetSpecContext): ElementsTypes[];
}
