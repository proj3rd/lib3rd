import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { Syntax } from '../classes/syntax';
import {
  OptionalGroupContext,
  RequiredTokenContext,
  TokenOrGroupSpecContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { OptionalGroupVisitor } from './optionalGroupVisitor';
import { _RequiredToken, RequiredTokenVisitor } from './requiredTokenVisitor';

/**
 * # Grammar
 * ```
 * tokenOrGroupSpec: requiredToken | optionalGroup
 * ```
 */
export class TokenOrGroupSpecVisitor
  extends AbstractParseTreeVisitor<_TokenOrSyntax>
  implements ASN_3gppVisitor<_TokenOrSyntax> {
  public visitChildren(ctx: TokenOrGroupSpecContext): _TokenOrSyntax {
    const childCtx = ctx.getChild(0);
    if (childCtx instanceof RequiredTokenContext) {
      return childCtx.accept(new RequiredTokenVisitor());
    } else if (childCtx instanceof OptionalGroupContext) {
      return childCtx.accept(new OptionalGroupVisitor());
    }
    throw Error();
  }

  protected defaultResult(): _TokenOrSyntax {
    return unimpl();
  }
}

export type _TokenOrSyntax = _RequiredToken | Syntax;
