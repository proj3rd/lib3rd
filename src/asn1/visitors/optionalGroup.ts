import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { OptionalGroupContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { Syntax } from '../classes/syntax';
import { syntaxesFrom } from './syntaxList';
import { TokenOrGroupSpecVisitor } from './tokenOrGroupSpec';

/**
 * ANTLR4 grammar
 * ```
 * optionalGroup : L_BRACKET (tokenOrGroupSpec)+ R_BRACKET
 * ```
 */
export class OptionalGroupVisitor extends AbstractParseTreeVisitor<Syntax>
                                  implements ASN_3gppVisitor<Syntax> {
  public defaultResult(): Syntax {
    return undefined;
  }

  public visitChildren(optionalGroupCtx: OptionalGroupContext): Syntax {
    const childCtxes = optionalGroupCtx.children.slice(1, -1);
    const tokenOrGroupSpecs = childCtxes.map((childCtx) => childCtx.accept(new TokenOrGroupSpecVisitor()));
    return syntaxesFrom(tokenOrGroupSpecs, true)[0];
  }
}
