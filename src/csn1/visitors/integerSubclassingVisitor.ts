import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import { IntegerSubclassing } from '../classes/integerSubclassing';
import { Integer_subclassingContext } from '../grammar/csn3rdParser';
import { csn3rdVisitor } from '../grammar/csn3rdVisitor';

/**
 * # Grammar
 * ```
 * integer_subclassing: ':=' IDENTIFIER;
 * ```
 */
export class IntegerSubclassingVisitor extends AbstractParseTreeVisitor<IntegerSubclassing> implements csn3rdVisitor<IntegerSubclassing> {
  public visitChildren(ctx: Integer_subclassingContext): IntegerSubclassing {
    return new IntegerSubclassing(ctx.getChild(1).text);
  }

  protected defaultResult(): IntegerSubclassing {
    return unimpl();
  }
}
