import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { OptionalGroupContext, RequiredTokenContext, TokenOrGroupSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { Syntax } from '../classes/syntax';
import { OptionalGroupVisitor } from './optionalGroup';
import { RequiredTokenVisitor } from './requiredToken';

/**
 * ANTLR4 grammar
 * ```
 * tokenOrGroupSpec : requiredToken | optionalGroup
 * ```
 */
export class TokenOrGroupSpecVisitor extends AbstractParseTreeVisitor<string | Syntax>
                                  implements ASN_3gppVisitor<string | Syntax> {
  public defaultResult(): string | Syntax {
    return undefined;
  }

  public visitChildren(tokenOrGroupSpecCtx: TokenOrGroupSpecContext): string | Syntax {
    const childCtx = tokenOrGroupSpecCtx.children[0];
    if (childCtx instanceof RequiredTokenContext) {
      return childCtx.accept(new RequiredTokenVisitor());
    }
    if (childCtx instanceof OptionalGroupContext) {
      return childCtx.accept(new OptionalGroupVisitor());
    }
  }
}
