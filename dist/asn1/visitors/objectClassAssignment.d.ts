import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectClassAssignmentContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ObjectClass } from '../classes/objectClass';
/**
 * ANTLR4 grammar
 * ```
 * objectClassAssignment : ASSIGN_OP objectClass
 * ```
 */
export declare class ObjectClassAssignmentVisitor extends AbstractParseTreeVisitor<ObjectClass> implements ASN_3gppVisitor<ObjectClass> {
    defaultResult(): ObjectClass;
    visitChildren(objectClassAssignmentCtx: ObjectClassAssignmentContext): ObjectClass;
}
