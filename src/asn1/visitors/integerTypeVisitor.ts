import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { IntegerType } from '../classes/integerType';
import { IntegerTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { INamedNumber } from '../types';
import { NamedNumberListVisitor } from './namedNumberListVisitor';

/**
 * # Grammar
 * ```
 * integerType: INTEGER_LITERAL (L_BRACE namedNumberList R_BRACE)?
 * ```
 */
export class IntegerTypeVisitor extends AbstractParseTreeVisitor<IntegerType>
  implements ASN_3gppVisitor<IntegerType> {
  public visitChildren(ctx: IntegerTypeContext): IntegerType {
    const namedNumberList: INamedNumber[] = [];
    const namedNumberListCtx = ctx.namedNumberList();
    if (namedNumberListCtx !== undefined) {
      namedNumberList.push(
        ...namedNumberListCtx.accept(new NamedNumberListVisitor())
      );
    }
    return new IntegerType(namedNumberList);
  }

  protected defaultResult(): IntegerType {
    return new IntegerType();
  }
}
