/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { BooleanValue } from '../classes/booleanValue';
import { EnumerationItem } from '../classes/enumeratedType';
import {
  EnumerationItemContext,
  NamedNumberContext,
  ValueContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ValueVisitor } from './valueVisitor';

/**
 * # Grammar
 * ```
 * enumerationItem: IDENTIFIER | namedNumber | value
 * ```
 */
export class EnumerationItemVisitor
  extends AbstractParseTreeVisitor<EnumerationItem>
  implements grammar3rdVisitor<EnumerationItem> {
  public visitChildren(ctx: EnumerationItemContext): EnumerationItem {
    const childCtx = ctx.getChild(0);
    if (childCtx instanceof NamedNumberContext) {
      unimpl(ctx.text);
    } else if (childCtx instanceof ValueContext) {
      const value = childCtx.accept(new ValueVisitor());
      if (value instanceof BooleanValue) {
        return value.literal;
      }
      unimpl();
    } else {
      return childCtx.text;
    }
    throw Error();
  }

  protected defaultResult(): EnumerationItem {
    return '';
  }
}
