import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectClass } from '../classes/objectClass';
import { ObjectClassContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * objectClass: definedObjectClass | objectClassDefn
 * ```
 */
export declare class ObjectClassVisitor extends AbstractParseTreeVisitor<ObjectClass> implements grammar3rdVisitor<ObjectClass> {
    visitChildren(ctx: ObjectClassContext): ObjectClass;
    protected defaultResult(): ObjectClass;
}
//# sourceMappingURL=objectClassVisitor.d.ts.map