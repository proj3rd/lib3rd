/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { Syntax } from '../classes/syntax';
import {
  OptionalGroupContext,
  RequiredTokenContext,
  TokenOrGroupSpecContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { OptionalGroupVisitor } from './optionalGroupVisitor';
import { _RequiredToken, RequiredTokenVisitor } from './requiredTokenVisitor';

export type _TokenOrSyntax = _RequiredToken | Syntax;

/**
 * # Grammar
 * ```
 * tokenOrGroupSpec: requiredToken | optionalGroup
 * ```
 */
export class TokenOrGroupSpecVisitor
  extends AbstractParseTreeVisitor<_TokenOrSyntax>
  implements grammar3rdVisitor<_TokenOrSyntax> {
  public visitChildren(ctx: TokenOrGroupSpecContext): _TokenOrSyntax {
    const childCtx = ctx.getChild(0);
    if (childCtx instanceof RequiredTokenContext) {
      return childCtx.accept(new RequiredTokenVisitor());
    } if (childCtx instanceof OptionalGroupContext) {
      return childCtx.accept(new OptionalGroupVisitor());
    }
    throw Error();
  }

  protected defaultResult(): _TokenOrSyntax {
    return unimpl();
  }
}
