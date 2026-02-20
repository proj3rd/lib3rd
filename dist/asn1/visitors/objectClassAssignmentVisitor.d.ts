import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectClass } from '../classes/objectClass';
import { ObjectClassAssignmentContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * objectClassAssignment: ASSIGN_OP objectClass
 * ```
 */
export declare class ObjectClassAssignmentVisitor extends AbstractParseTreeVisitor<ObjectClass> implements grammar3rdVisitor<ObjectClass> {
    visitChildren(ctx: ObjectClassAssignmentContext): ObjectClass;
    protected defaultResult(): ObjectClass;
}
//# sourceMappingURL=objectClassAssignmentVisitor.d.ts.map