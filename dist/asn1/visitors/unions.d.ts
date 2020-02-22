import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { UnionsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { UnionMark } from '../classes/unionMark';
import { ElementsTypes } from './elements';
export declare type Unions = Array<ElementsTypes | UnionMark>;
/**
 * ANTLR4 grammar
 * ```
 * unions :   (intersections) (unionMark intersections)*
 * ```
 */
export declare class UnionsVisitor extends AbstractParseTreeVisitor<Unions> implements ASN_3gppVisitor<Unions> {
    defaultResult(): Unions;
    visitChildren(unionsCtx: UnionsContext): Unions;
}
