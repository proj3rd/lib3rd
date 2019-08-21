import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TypeAssignmentContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
/**
 * ANTLR4 grammar
 * ```
 * typeAssignment :
 *       ASSIGN_OP
 *       asnType
 * ```
 */
export declare class TypeAssignmentVisitor extends AbstractParseTreeVisitor<AsnType> implements ASN_3gppVisitor<AsnType> {
    defaultResult(): AsnType;
    visitChildren(typeAssignmentCtx: TypeAssignmentContext): AsnType;
}
