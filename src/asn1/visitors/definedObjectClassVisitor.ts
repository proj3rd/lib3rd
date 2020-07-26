import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { DefinedObjectClass } from '../classes/asnType';
import { ObjectClassReference } from '../classes/objectClassReference';
import { DefinedObjectClassContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

/**
 * # Grammar
 * ```
 * definedObjectClass :
 *   (IDENTIFIER DOT)? IDENTIFIER
 *   | TYPE_IDENTIFIER_LITERAL
 *   |  ABSTRACT_SYNTAX_LITERAL
 * ```
 */
export class DefinedObjectClassVisitor
  extends AbstractParseTreeVisitor<DefinedObjectClass>
  implements ASN_3gppVisitor<DefinedObjectClass> {
  public visitChildren(ctx: DefinedObjectClassContext): DefinedObjectClass {
    switch (ctx.text) {
      case 'TYPE-IDENTIFIER': {
        return unimpl();
      }
      case 'ABSTRACT-SYNTAX': {
        return unimpl();
      }
    }
    if (ctx.childCount > 1) {
      return unimpl();
    } else {
      const objectClassReference = ctx.getChild(0).text;
      return new ObjectClassReference(objectClassReference);
    }
    throw Error();
  }

  protected defaultResult(): DefinedObjectClass {
    return unimpl();
  }
}
