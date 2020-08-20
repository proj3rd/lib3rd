import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectClass } from '../classes/objectClass';
import { ObjectClassContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * objectClass: definedObjectClass | objectClassDefn
 * ```
 */
export declare class ObjectClassVisitor extends AbstractParseTreeVisitor<ObjectClass> implements ASN_3gppVisitor<ObjectClass> {
    visitChildren(ctx: ObjectClassContext): ObjectClass;
    protected defaultResult(): ObjectClass;
}
//# sourceMappingURL=objectClassVisitor.d.ts.map