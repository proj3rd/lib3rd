import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ContentsConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { ContainingEncodedByConstraint } from '../classes/containingEncodedByConstraint';
import { BuiltinValue } from './builtinValue';
import { ComponentPresenceLists } from './componentPresenceLists';
export interface IContentsConstraint {
    containing?: AsnType;
    encodedBy?: BuiltinValue;
    withComponents?: ComponentPresenceLists;
}
/**
 * ANTLR4 grammar
 * ```contentsConstraint :
 *    CONTAINING_LITERAL asnType
 *  |  ENCODED_LITERAL BY_LITERAL value
 *  |  CONTAINING_LITERAL asnType ENCODED_LITERAL BY_LITERAL value
 *  |  WITH_LITERAL COMPONENTS_LITERAL L_BRACE componentPresenceLists R_BRACE
 * ```
 */
export declare class ContentsConstraintVisitor extends AbstractParseTreeVisitor<ContainingEncodedByConstraint | IContentsConstraint> implements ASN_3gppVisitor<ContainingEncodedByConstraint | IContentsConstraint> {
    defaultResult(): ContainingEncodedByConstraint | IContentsConstraint;
    visitChildren(contentsConstraintCtx: ContentsConstraintContext): ContainingEncodedByConstraint | IContentsConstraint;
}
