/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumerationItem } from '../classes/enumeratedType';
import { EnumerationContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { EnumerationItemVisitor } from './enumerationItemVisitor';

/**
 * # Grammar
 * ```
 * enumeration: enumerationItem (COMMA enumerationItem)*
 * ```
 */
export class EnumerationVisitor
  extends AbstractParseTreeVisitor<EnumerationItem[]>
  implements grammar3rdVisitor<EnumerationItem[]> {
  public visitChildren(ctx: EnumerationContext): EnumerationItem[] {
    const enumerationItemCtxes = ctx.enumerationItem();
    return enumerationItemCtxes
      .map((enumerationItemCtx) => enumerationItemCtx.accept(new EnumerationItemVisitor()));
  }

  protected defaultResult(): EnumerationItem[] {
    return [];
  }
}
