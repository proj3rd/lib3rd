import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { PrimitiveFieldName } from '../classes/primitiveFieldName';
import { FieldNameContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

/**
 * # Grammar
 * ```
 * fieldName: (AMPERSAND IDENTIFIER) (DOT AMPERSAND IDENTIFIER)*
 * ```
 */
export class FieldNameVisitor
  extends AbstractParseTreeVisitor<PrimitiveFieldName[]>
  implements ASN_3gppVisitor<PrimitiveFieldName[]> {
  public visitChildren(ctx: FieldNameContext): PrimitiveFieldName[] {
    const primitiveFieldNameList: PrimitiveFieldName[] = [];
    const { childCount } = ctx;
    for (let i = 1; i < childCount; i += 3) {
      const name = ctx.getChild(i).text;
      primitiveFieldNameList.push(new PrimitiveFieldName(name));
    }
    return primitiveFieldNameList;
  }

  protected defaultResult(): PrimitiveFieldName[] {
    return unimpl();
  }
}
