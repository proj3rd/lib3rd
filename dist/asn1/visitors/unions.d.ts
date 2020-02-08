import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { UnionsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IConstraint } from './elements';
/**
 * ANTLR4 grammar
 * ```
 * unions :   (intersections) (unionMark intersections)*
 * ```
 */
export declare class UnionsVisitor extends AbstractParseTreeVisitor<IConstraint[]> implements ASN_3gppVisitor<IConstraint[]> {
    defaultResult(): IConstraint[];
    visitChildren(unionsCtx: UnionsContext): IConstraint[];
}
