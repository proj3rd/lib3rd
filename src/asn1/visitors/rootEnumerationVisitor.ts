/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumerationItem } from '../classes/enumeratedType';
import { RootEnumerationContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { EnumerationVisitor } from './enumerationVisitor';

/**
 * # Grammar
 * ```
 * rootEnumeration: enumeration
 * ```
 */
export class RootEnumerationVisitor
  extends AbstractParseTreeVisitor<EnumerationItem[]>
  implements grammar3rdVisitor<EnumerationItem[]> {
  public visitChildren(ctx: RootEnumerationContext): EnumerationItem[] {
    const enumerationCtx = ctx.enumeration();
    return enumerationCtx.accept(new EnumerationVisitor());
  }

  protected defaultResult(): EnumerationItem[] {
    return [];
  }
}
