import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { GovernorContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { Governor } from '../types';
/**
 * # Grammar
 * ```
 * governor: asnType | definedObjectClass
 * ```
 */
export declare class GovernorVisitor extends AbstractParseTreeVisitor<Governor> implements ASN_3gppVisitor<Governor> {
    visitChildren(ctx: GovernorContext): Governor;
    protected defaultResult(): Governor;
}
//# sourceMappingURL=governorVisitor.d.ts.map