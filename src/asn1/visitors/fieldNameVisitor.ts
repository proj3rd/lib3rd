import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { PrimitiveFieldName } from '../classes/primitiveFieldName';
import { FieldNameContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

/**
 * # Grammar
 * ```
 * fieldName: (AMPERSAND IDENTIFIER) (AMPERSAND IDENTIFIER DOT)*
 * ```
 */
export class FieldNameVisitor
  extends AbstractParseTreeVisitor<PrimitiveFieldName[]>
  implements ASN_3gppVisitor<PrimitiveFieldName[]> {
  public visitChildren(ctx: FieldNameContext): PrimitiveFieldName[] {
    if (ctx.childCount > 2) {
      return unimpl();
    }
    const nameCtx = ctx.getChild(1);
    const name = nameCtx.text;
    return [new PrimitiveFieldName(name)];
  }

  protected defaultResult(): PrimitiveFieldName[] {
    return unimpl();
  }
}
