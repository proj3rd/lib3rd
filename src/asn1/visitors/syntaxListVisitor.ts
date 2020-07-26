import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { PrimitiveFieldName } from '../classes/primitiveFieldName';
import { Syntax } from '../classes/syntax';
import { SyntaxListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { TokenOrGroupSpecVisitor } from './tokenOrGroupSepcVisitor';

/**
 * # Grammar
 * ```
 * syntaxList: L_BRACE tokenOrGroupSpec+ R_BRACE
 * ```
 * Currently, only supports `string[] PrimitiveFieldName` form
 */
export class SyntaxListVisitor extends AbstractParseTreeVisitor<Syntax[]>
  implements ASN_3gppVisitor<Syntax[]> {
  public visitChildren(ctx: SyntaxListContext): Syntax[] {
    const tokenOrGroupSpecCtxes = ctx.tokenOrGroupSpec();
    const tokenOrGroupSpecs = tokenOrGroupSpecCtxes.map((tokenOrGroupSpecCtx) =>
      tokenOrGroupSpecCtx.accept(new TokenOrGroupSpecVisitor())
    );
    const syntaxList: Syntax[] = [];
    const arrToLiteral: string[] = [];
    tokenOrGroupSpecs.forEach((tokenOrGroupSpec) => {
      if (typeof tokenOrGroupSpec === 'string') {
        arrToLiteral.push(tokenOrGroupSpec);
      } else if (tokenOrGroupSpec instanceof PrimitiveFieldName) {
        if (arrToLiteral.length === 0) {
          throw Error();
        }
        const literal = arrToLiteral.join(' ');
        const syntax = new Syntax(literal, tokenOrGroupSpec, false);
        syntaxList.push(syntax);
        arrToLiteral.length = 0;
      } else if (tokenOrGroupSpec instanceof Syntax) {
        syntaxList.push(tokenOrGroupSpec);
      }
    });
    return syntaxList;
  }

  protected defaultResult(): Syntax[] {
    return unimpl();
  }
}
