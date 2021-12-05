import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import { Subclassing } from '../classes/subclassing';
import { SubclassingContext } from '../grammar/csn3rdParser';
import { csn3rdVisitor } from '../grammar/csn3rdVisitor';

/**
 * # Grammar
 * ```
 * subclassing: '==' IDENTIFIER;
 * ```
 */
export class SubclassingVisitor extends AbstractParseTreeVisitor<Subclassing> implements csn3rdVisitor<Subclassing> {
  public visitChildren(ctx: SubclassingContext): Subclassing {
    return new Subclassing(ctx.getChild(1).text);
  }

  protected defaultResult(): Subclassing {
    return unimpl();
  }
}
