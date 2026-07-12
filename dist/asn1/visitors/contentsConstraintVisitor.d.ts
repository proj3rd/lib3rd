import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ContentsConstraintContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { GeneralConstraint } from '../types/generalConstraint';
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
export declare class ContentsConstraintVisitor extends AbstractParseTreeVisitor<GeneralConstraint> implements grammar3rdVisitor<GeneralConstraint> {
    visitChildren(ctx: ContentsConstraintContext): GeneralConstraint;
    protected defaultResult(): GeneralConstraint;
}
//# sourceMappingURL=contentsConstraintVisitor.d.ts.map