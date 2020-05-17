import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RootElementSetSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { Unions } from './unions';
/**
 * ANTLR4 grammar
 * rootElementSetSpec : elementSetSpec
 */
export declare class RootElementSetSpecVisitor extends AbstractParseTreeVisitor<Unions> implements ASN_3gppVisitor<Unions> {
    defaultResult(): Unions;
    visitChildren(rootElementSetSpecCtx: RootElementSetSpecContext): Unions;
}
