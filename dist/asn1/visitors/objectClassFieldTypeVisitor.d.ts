import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectClassFieldType } from '../classes/objectClassFieldType';
import { ObjectClassFieldTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * objectClassFieldType: definedObjectClass DOT fieldName
 * ```
 */
export declare class ObjectClassFieldTypeVisitor extends AbstractParseTreeVisitor<ObjectClassFieldType> implements ASN_3gppVisitor<ObjectClassFieldType> {
    visitChildren(ctx: ObjectClassFieldTypeContext): ObjectClassFieldType;
    protected defaultResult(): ObjectClassFieldType;
}
//# sourceMappingURL=objectClassFieldTypeVisitor.d.ts.map