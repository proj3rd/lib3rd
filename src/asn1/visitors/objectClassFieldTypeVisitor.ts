/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { ObjectClassFieldType } from '../classes/objectClassFieldType';
import { ObjectClassFieldTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
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
  implements grammar3rdVisitor<ObjectClassFieldType> {
  public visitChildren(ctx: ObjectClassFieldTypeContext): ObjectClassFieldType {
    const definedObjectClassCtx = ctx.definedObjectClass();
    const definedObjectClass = definedObjectClassCtx.accept(
      new DefinedObjectClassVisitor(),
    );
    const fieldNameCtx = ctx.fieldName();
    const fieldName = fieldNameCtx.accept(new FieldNameVisitor());
    return new ObjectClassFieldType(definedObjectClass, fieldName);
  }

  protected defaultResult(): ObjectClassFieldType {
    return unimpl();
  }
}
