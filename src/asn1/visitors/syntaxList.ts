import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SyntaxListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { Syntax } from '../classes/syntax';
import { TokenOrGroupSpecVisitor } from './tokenOrGroupSpec';

export function syntaxesFrom(tokens: Array<string | Syntax>, optional: boolean = false): Syntax[] {
  const syntaxes: Syntax[] = [];
  const literalArray = [];
  tokens.forEach((token) => {
    if (token instanceof Syntax) {
      token.optional = optional || token.optional;
      syntaxes.push(token);
    } else {
      if (token.startsWith('&')) {
        syntaxes.push(new Syntax(literalArray.join(' '), token, optional));
        literalArray.length = 0;
      } else {
        literalArray.push(token);
      }
    }
  });
  return syntaxes;
}

/**
 * ANTLR4 grammar
 * ```
 * syntaxList : L_BRACE tokenOrGroupSpec+ R_BRACE
 * ```
 */
export class SyntaxListVisitor extends AbstractParseTreeVisitor<Syntax[]>
                                  implements ASN_3gppVisitor<Syntax[]> {
  public defaultResult(): Syntax[] {
    return [];
  }

  public visitChildren(syntaxListCtx: SyntaxListContext): Syntax[] {
    const childCtxes = syntaxListCtx.children.slice(1, -1);
    const tokenOrGroupSpecs = childCtxes.map((childCtx) => childCtx.accept(new TokenOrGroupSpecVisitor()));
    return syntaxesFrom(tokenOrGroupSpecs);
  }
}
