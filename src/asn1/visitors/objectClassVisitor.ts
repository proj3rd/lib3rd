import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ObjectClass } from '../classes/objectClass';
import {
  DefinedObjectClassContext,
  ObjectClassContext,
  ObjectClassDefnContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ObjectClassDefnVisitor } from './objectClassDefnVisitor';

/**
 * # Grammar
 * ```
 * objectClass: definedObjectClass | objectClassDefn
 * ```
 */
export class ObjectClassVisitor extends AbstractParseTreeVisitor<ObjectClass>
  implements ASN_3gppVisitor<ObjectClass> {
  public visitChildren(ctx: ObjectClassContext): ObjectClass {
    const childCtx = ctx.getChild(0);
    if (childCtx instanceof DefinedObjectClassContext) {
      return unimpl();
    }
    if (childCtx instanceof ObjectClassDefnContext) {
      return childCtx.accept(new ObjectClassDefnVisitor());
    }
    throw Error();
  }

  protected defaultResult(): ObjectClass {
    return unimpl();
  }
}
