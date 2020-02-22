import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectClassContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ObjectClass } from '../classes/objectClass';
/**
 * ANTLR4 grammar
 * ```
 * objectClass : definedObjectClass | objectClassDefn
 * ```
 */
export declare class ObjectClassVisitor extends AbstractParseTreeVisitor<ObjectClass> implements ASN_3gppVisitor<ObjectClass> {
    defaultResult(): ObjectClass;
    visitChildren(objectClassCtx: ObjectClassContext): ObjectClass;
}
