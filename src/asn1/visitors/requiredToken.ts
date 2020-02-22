import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { LiteralContext, PrimitiveFieldNameContext, RequiredTokenContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { LiteralVisitor } from './literal';
import { PrimitiveFieldNameVisitor } from './primitiveFieldName';

/**
 * ANTLR4 grammar
 * ```
 * requiredToken : literal | primitiveFieldName
 * ```
 */
export class RequiredTokenVisitor extends AbstractParseTreeVisitor<string>
                                  implements ASN_3gppVisitor<string> {
  public defaultResult(): string {
    return undefined;
  }

  public visitChildren(requiredTokenCtx: RequiredTokenContext): string {
    const childCtx = requiredTokenCtx.children[0];
    if (childCtx instanceof LiteralContext) {
      return childCtx.accept(new LiteralVisitor());
    }
    if (childCtx instanceof PrimitiveFieldNameContext) {
      return childCtx.accept(new PrimitiveFieldNameVisitor());
    }
  }
}
