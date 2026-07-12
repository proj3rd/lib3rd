/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { AdditionalEnumerationContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { EnumerationItem } from '../types/enumerationItem';
import { EnumerationVisitor } from './enumerationVisitor';

/**
 * # Grammar
 * ```
 * additionalEnumeration: enumeration
 * ```
 */
export class AdditionalEnumerationVisitor
  extends AbstractParseTreeVisitor<EnumerationItem[]>
  implements grammar3rdVisitor<EnumerationItem[]> {
  public visitChildren(ctx: AdditionalEnumerationContext): EnumerationItem[] {
    const enumerationCtx = ctx.enumeration();
    return enumerationCtx.accept(new EnumerationVisitor());
  }

  protected defaultResult(): EnumerationItem[] {
    return unimpl();
  }
}
