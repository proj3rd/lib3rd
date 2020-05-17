import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectClassDefnContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ObjectClass } from '../classes/objectClass';
/**
 * ANTLR4 grammar
 * ```
 * objectClassDefn : CLASS_LITERAL L_BRACE  fieldSpec (COMMA fieldSpec  )*  R_BRACE  withSyntaxSpec?
 * ```
 */
export declare class ObjectClassDefnVisitor extends AbstractParseTreeVisitor<ObjectClass> implements ASN_3gppVisitor<ObjectClass> {
    defaultResult(): ObjectClass;
    visitChildren(objectClassDefnCtx: ObjectClassDefnContext): ObjectClass;
}
