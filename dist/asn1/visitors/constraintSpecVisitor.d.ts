import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _ConstraintSpec } from '../types';
import { ConstraintSpecContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * constraintSpec: generalConstraint | subtypeConstraint
 * ```
 */
export declare class ConstraintSpecVisitor extends AbstractParseTreeVisitor<_ConstraintSpec> implements ASN_3gppVisitor<_ConstraintSpec> {
    visitChildren(ctx: ConstraintSpecContext): _ConstraintSpec;
    protected defaultResult(): _ConstraintSpec;
}
//# sourceMappingURL=constraintSpecVisitor.d.ts.map