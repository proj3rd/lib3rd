import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _GeneralConstraint } from '../types';
import { GeneralConstraintContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * generalConstraint: userDefinedConstraint | tableConstraint | contentsConstraint
 * ```
 */
export declare class GeneralConstraintVisitor extends AbstractParseTreeVisitor<_GeneralConstraint> implements ASN_3gppVisitor<_GeneralConstraint> {
    visitChildren(ctx: GeneralConstraintContext): _GeneralConstraint;
    protected defaultResult(): _GeneralConstraint;
}
//# sourceMappingURL=generalConstraintVisitor.d.ts.map