import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AdditionalElementSetSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { Unions } from './unions';
/**
 * ANTLR4 grammar
 * rootElementSetSpec : elementSetSpec
 */
export declare class AdditionalElementSetSpecVisitor extends AbstractParseTreeVisitor<Unions> implements ASN_3gppVisitor<Unions> {
    defaultResult(): Unions;
    visitChildren(additionalElementSetSpecCtx: AdditionalElementSetSpecContext): Unions;
}
