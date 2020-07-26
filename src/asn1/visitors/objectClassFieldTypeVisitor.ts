import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ObjectClassFieldType } from '../classes/objectClassFieldType';
import { ObjectClassFieldTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { DefinedObjectClassVisitor } from './definedObjectClassVisitor';
import { FieldNameVisitor } from './fieldNameVisitor';

/**
 * # Grammar
 * ```
 * objectClassFieldType: definedObjectClass DOT fieldName
 * ```
 */
export class ObjectClassFieldTypeVisitor
  extends AbstractParseTreeVisitor<ObjectClassFieldType>
  implements ASN_3gppVisitor<ObjectClassFieldType> {
  public visitChildren(ctx: ObjectClassFieldTypeContext): ObjectClassFieldType {
    const definedObjectClassCtx = ctx.definedObjectClass();
    const definedObjectClass = definedObjectClassCtx.accept(
      new DefinedObjectClassVisitor()
    );
    const fieldNameCtx = ctx.fieldName();
    const fieldName = fieldNameCtx.accept(new FieldNameVisitor());
    return new ObjectClassFieldType(definedObjectClass, fieldName);
  }

  protected defaultResult(): ObjectClassFieldType {
    return unimpl();
  }
}
