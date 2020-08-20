import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SubtypeConstraint } from '../classes/subtypeConstraint';
import { SubtypeConstraintContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * subtypeConstraint: elementSetSpecs
 * ```
 */
export declare class SubtypeConstraintVisitor extends AbstractParseTreeVisitor<SubtypeConstraint> implements ASN_3gppVisitor<SubtypeConstraint> {
    visitChildren(ctx: SubtypeConstraintContext): SubtypeConstraint;
    protected defaultResult(): SubtypeConstraint;
}
//# sourceMappingURL=subtypeConstraintVisitor.d.ts.map