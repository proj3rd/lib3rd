/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TagDefault } from '../classes/moduleDefinition';
import { TagDefaultContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

/**
 * # Grammar
 * ```
 * tagDefault: ((EXPLICIT_LITERAL | IMPLICIT_LITERAL | AUTOMATIC_LITERAL) TAGS_LITERAL)?
 * ```
 */
export class TagDefaultVisitor extends AbstractParseTreeVisitor<TagDefault>
  implements grammar3rdVisitor<TagDefault> {
  public visitChildren(ctx: TagDefaultContext): TagDefault {
    if (ctx.childCount === 0) {
      return '';
    }
    switch (ctx.getChild(0).text) {
      case 'EXPLICIT':
        return 'EXPLICIT TAGS';
      case 'IMPLICIT':
        return 'IMPLICIT TAGS';
      case 'AUTOMATIC':
        return 'AUTOMATIC TAGS';
      default:
        throw Error();
    }
  }

  protected defaultResult(): TagDefault {
    return '';
  }
}
