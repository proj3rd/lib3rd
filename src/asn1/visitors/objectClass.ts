import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { log } from '../../utils/logging';
import { DefinedObjectClassContext, ObjectClassContext, ObjectClassDefnContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ObjectClass } from '../classes/objectClass';
import { ObjectClassDefnVisitor } from './objectClassDefn';

/**
 * ANTLR4 grammar
 * ```
 * objectClass : definedObjectClass | objectClassDefn
 * ```
 */
export class ObjectClassVisitor extends AbstractParseTreeVisitor<ObjectClass>
                                  implements ASN_3gppVisitor<ObjectClass> {
  public defaultResult(): ObjectClass {
    return undefined;
  }

  public visitChildren(objectClassCtx: ObjectClassContext): ObjectClass {
    const childCtx = objectClassCtx.children[0];
    if (childCtx instanceof DefinedObjectClassContext) {
      log.warn('definedObjectClass not supported');
    }
    if (childCtx instanceof ObjectClassDefnContext) {
      return childCtx.accept(new ObjectClassDefnVisitor());
    }
  }
}
