import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { UnionMarkContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { UnionMark } from '../classes/unionMark';
/**
 * ANTLR4 grammar
 * ```
 * unionMark  :  PIPE  |  UNION_LITERAL
 * ```
 */
export declare class UnionMarkVisitor extends AbstractParseTreeVisitor<UnionMark> implements ASN_3gppVisitor<UnionMark> {
    defaultResult(): UnionMark;
    visitChildren(unionMarkCtx: UnionMarkContext): UnionMark;
}
