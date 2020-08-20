import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectClass } from '../classes/objectClass';
import { ObjectClassAssignmentContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * objectClassAssignment: ASSIGN_OP objectClass
 * ```
 */
export declare class ObjectClassAssignmentVisitor extends AbstractParseTreeVisitor<ObjectClass> implements ASN_3gppVisitor<ObjectClass> {
    visitChildren(ctx: ObjectClassAssignmentContext): ObjectClass;
    protected defaultResult(): ObjectClass;
}
//# sourceMappingURL=objectClassAssignmentVisitor.d.ts.map