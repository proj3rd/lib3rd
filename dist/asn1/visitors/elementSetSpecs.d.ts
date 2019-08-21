import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ElementSetSpecsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IConstraint } from './elements';
/**
 * ANTLR4 grammar
 * ```
 * elementSetSpecs :
 *  rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec)?)?
 * ```
 */
export declare class ElementSetSpecsVisitor extends AbstractParseTreeVisitor<IConstraint> implements ASN_3gppVisitor<IConstraint> {
    defaultResult(): IConstraint;
    visitChildren(elementSetSpecsCtx: ElementSetSpecsContext): IConstraint;
}
