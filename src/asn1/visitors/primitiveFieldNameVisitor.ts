/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { PrimitiveFieldName } from '../classes/primitiveFieldName';
import { PrimitiveFieldNameContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

/**
 * # Grammar
 * ```
 * primitiveFieldName: AMPERSAND IDENTIFIER
 * ```
 */
export class PrimitiveFieldNameVisitor
  extends AbstractParseTreeVisitor<PrimitiveFieldName>
  implements grammar3rdVisitor<PrimitiveFieldName> {
  public visitChildren(ctx: PrimitiveFieldNameContext): PrimitiveFieldName {
    const nameCtx = ctx.getChild(1);
    const name = nameCtx.text;
    return new PrimitiveFieldName(name);
  }

  protected defaultResult(): PrimitiveFieldName {
    return unimpl();
  }
}
