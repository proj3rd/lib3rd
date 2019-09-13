import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectClassFieldTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ObjectClassField } from '../classes/objectClassField';
/**
 * ANTLR4 grammar
 * ```
 * objectClassFieldType : definedObjectClass DOT fieldName
 * ```
 */
export declare class ObjectClassFieldTypeVisitor extends AbstractParseTreeVisitor<ObjectClassField> implements ASN_3gppVisitor<ObjectClassField> {
    defaultResult(): ObjectClassField;
    visitChildren(objectClassFieldTypeCtx: ObjectClassFieldTypeContext): ObjectClassField;
}
