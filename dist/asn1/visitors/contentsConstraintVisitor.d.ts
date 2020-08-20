import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _GeneralConstraint } from '../types';
import { ContentsConstraintContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * contentsConstraint :
 *     CONTAINING_LITERAL asnType
 *   | ENCODED_LITERAL BY_LITERAL value
 *   | CONTAINING_LITERAL asnType ENCODED_LITERAL BY_LITERAL value
 *   | WITH_LITERAL COMPONENTS_LITERAL L_BRACE componentPresenceLists R_BRACE
 * ```
 */
export declare class ContentsConstraintVisitor extends AbstractParseTreeVisitor<_GeneralConstraint> implements ASN_3gppVisitor<_GeneralConstraint> {
    visitChildren(ctx: ContentsConstraintContext): _GeneralConstraint;
    protected defaultResult(): _GeneralConstraint;
}
//# sourceMappingURL=contentsConstraintVisitor.d.ts.map