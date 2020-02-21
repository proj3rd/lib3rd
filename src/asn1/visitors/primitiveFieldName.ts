import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { PrimitiveFieldNameContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

/**
 * ANTLR4 grammar
 * ```
 * primitiveFieldName : AMPERSAND IDENTIFIER;
 * ```
 */
export class PrimitiveFieldNameVisitor extends AbstractParseTreeVisitor<string>
                                  implements ASN_3gppVisitor<string> {
  public defaultResult(): string {
    return undefined;
  }

  public visitChildren(primitiveFieldNameCtx: PrimitiveFieldNameContext): string {
    return primitiveFieldNameCtx.text;
  }
}
