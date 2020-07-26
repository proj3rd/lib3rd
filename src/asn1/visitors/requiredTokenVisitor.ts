import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { PrimitiveFieldName } from '../classes/primitiveFieldName';
import {
  LiteralContext,
  PrimitiveFieldNameContext,
  RequiredTokenContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { LiteralVisitor } from './literalVisitor';
import { PrimitiveFieldNameVisitor } from './primitiveFieldNameVisitor';

/**
 * # Grammar
 * ```
 * requiredToken: literal | primitiveFieldName
 * ```
 */
export class RequiredTokenVisitor
  extends AbstractParseTreeVisitor<_RequiredToken>
  implements ASN_3gppVisitor<_RequiredToken> {
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

export type _RequiredToken = string | PrimitiveFieldName;
