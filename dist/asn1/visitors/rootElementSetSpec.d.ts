import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RootElementSetSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IConstraint } from './elements';
/**
 * ANTLR4 grammar
 * rootElementSetSpec : elementSetSpec
 */
export declare class RootElementSetSpecVisitor extends AbstractParseTreeVisitor<IConstraint> implements ASN_3gppVisitor<IConstraint> {
    defaultResult(): IConstraint;
    visitChildren(rootElementSetSpecCtx: RootElementSetSpecContext): IConstraint;
}
