import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../_devUtils';
import { IntegerType } from '../classes/integerType';
import { IntegerTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

/**
 * # Grammar
 * ```
 * integerType: INTEGER_LITERAL (L_BRACE namedNumberList R_BRACE)?
 * ```
 */
export class IntegerTypeVisitor extends AbstractParseTreeVisitor<IntegerType>
  implements ASN_3gppVisitor<IntegerType> {
  public visitChildren(ctx: IntegerTypeContext): IntegerType {
    const integerType = new IntegerType();
    const namedNumberList = ctx.namedNumberList();
    if (namedNumberList !== undefined) {
      unimpl();
    }
    return integerType;
  }

  protected defaultResult(): IntegerType {
    return new IntegerType();
  }
}
