import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { PrimitiveFieldName } from '../classes/primitiveFieldName';
import { PrimitiveFieldNameContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

/**
 * # Grammar
 * ```
 * primitiveFieldName: AMPERSAND IDENTIFIER
 * ```
 */
export class PrimitiveFieldNameVisitor
  extends AbstractParseTreeVisitor<PrimitiveFieldName>
  implements ASN_3gppVisitor<PrimitiveFieldName> {
  public visitChildren(ctx: PrimitiveFieldNameContext): PrimitiveFieldName {
    const nameCtx = ctx.getChild(1);
    const name = nameCtx.text;
    return new PrimitiveFieldName(name);
  }

  protected defaultResult(): PrimitiveFieldName {
    return unimpl();
  }
}
