/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { DefinedObjectClass } from '../classes/asnType';
import { ObjectClassReference } from '../classes/objectClassReference';
import { DefinedObjectClassContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

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
  implements grammar3rdVisitor<DefinedObjectClass> {
  public visitChildren(ctx: DefinedObjectClassContext): DefinedObjectClass {
    if (ctx.text === 'TYPE-IDENTIFIER') {
      return unimpl();
    }
    if (ctx.text === 'ABSTRACT-SYNTAX') {
      return unimpl();
    }
    if (ctx.childCount > 1) {
      return unimpl();
    }
    const objectClassReference = ctx.getChild(0).text;
    return new ObjectClassReference(objectClassReference);
  }

  protected defaultResult(): DefinedObjectClass {
    return unimpl();
  }
}
