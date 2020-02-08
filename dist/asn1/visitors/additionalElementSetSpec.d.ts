import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AdditionalElementSetSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IConstraint } from './elements';
/**
 * ANTLR4 grammar
 * rootElementSetSpec : elementSetSpec
 */
export declare class AdditionalElementSetSpecVisitor extends AbstractParseTreeVisitor<IConstraint[]> implements ASN_3gppVisitor<IConstraint[]> {
    defaultResult(): IConstraint[];
    visitChildren(additionalElementSetSpecCtx: AdditionalElementSetSpecContext): IConstraint[];
}
