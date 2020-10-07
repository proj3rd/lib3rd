import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _GeneralConstraint } from '../types';
import { ContentsConstraintContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
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
export declare class ContentsConstraintVisitor extends AbstractParseTreeVisitor<_GeneralConstraint> implements grammar3rdVisitor<_GeneralConstraint> {
    visitChildren(ctx: ContentsConstraintContext): _GeneralConstraint;
    protected defaultResult(): _GeneralConstraint;
}
//# sourceMappingURL=contentsConstraintVisitor.d.ts.map