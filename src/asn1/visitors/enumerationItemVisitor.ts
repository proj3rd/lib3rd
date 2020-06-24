import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../_devUtils';
import { BooleanValue } from '../classes/booleanValue';
import { EnumerationItem } from '../classes/enumeratedType';
import {
  EnumerationItemContext,
  NamedNumberContext,
  ValueContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ValueVisitor } from './valueVisitor';

/**
 * # Grammar
 * ```
 * enumerationItem: IDENTIFIER | namedNumber | value
 * ```
 */
export class EnumerationItemVisitor
  extends AbstractParseTreeVisitor<EnumerationItem>
  implements ASN_3gppVisitor<EnumerationItem> {
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
