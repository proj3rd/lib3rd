/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { BooleanValue } from '../classes/booleanValue';
import {
  EnumerationItemContext,
  NamedNumberContext,
  ValueContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { EnumerationItem } from '../types/enumerationItem';
import { NamedNumberVisitor } from './namedNumberVisitor';
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
      return childCtx.accept(new NamedNumberVisitor());
    }
    if (childCtx instanceof ValueContext) {
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
