/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumeratedType } from '../classes/enumeratedType';
import { EnumeratedTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { EnumerationsVisitor } from './enumerationsVisitor';

/**
 * # Grammar
 * ```
 * enumeratedType: ENUMERATED_LITERAL L_BRACE enumerations R_BRACE
 * ```
 */
export class EnumeratedTypeVisitor
  extends AbstractParseTreeVisitor<EnumeratedType>
  implements grammar3rdVisitor<EnumeratedType> {
  public visitChildren(ctx: EnumeratedTypeContext): EnumeratedType {
    const enumerationsCtx = ctx.enumerations();
    const enumerations = enumerationsCtx.accept(new EnumerationsVisitor());
    return new EnumeratedType(enumerations);
  }

  protected defaultResult(): EnumeratedType {
    return new EnumeratedType([]);
  }
}
