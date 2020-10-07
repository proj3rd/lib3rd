import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectClassFieldType } from '../classes/objectClassFieldType';
import { ObjectClassFieldTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * objectClassFieldType: definedObjectClass DOT fieldName
 * ```
 */
export declare class ObjectClassFieldTypeVisitor extends AbstractParseTreeVisitor<ObjectClassFieldType> implements grammar3rdVisitor<ObjectClassFieldType> {
    visitChildren(ctx: ObjectClassFieldTypeContext): ObjectClassFieldType;
    protected defaultResult(): ObjectClassFieldType;
}
//# sourceMappingURL=objectClassFieldTypeVisitor.d.ts.map