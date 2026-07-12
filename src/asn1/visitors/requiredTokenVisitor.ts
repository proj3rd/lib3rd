/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { PrimitiveFieldName } from '../classes/primitiveFieldName';
import {
  LiteralContext,
  PrimitiveFieldNameContext,
  RequiredTokenContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { LiteralVisitor } from './literalVisitor';
import { PrimitiveFieldNameVisitor } from './primitiveFieldNameVisitor';

export type _RequiredToken = string | PrimitiveFieldName;

/**
 * # Grammar
 * ```
 * requiredToken: literal | primitiveFieldName
 * ```
 */
export class RequiredTokenVisitor
  extends AbstractParseTreeVisitor<_RequiredToken>
  implements grammar3rdVisitor<_RequiredToken> {
  public visitChildren(ctx: RequiredTokenContext): _RequiredToken {
    const childCtx = ctx.getChild(0);
    if (childCtx instanceof LiteralContext) {
      return childCtx.accept(new LiteralVisitor());
    }
    if (childCtx instanceof PrimitiveFieldNameContext) {
      return childCtx.accept(new PrimitiveFieldNameVisitor());
    }
    throw Error();
  }

  protected defaultResult(): _RequiredToken {
    return unimpl();
  }
}
