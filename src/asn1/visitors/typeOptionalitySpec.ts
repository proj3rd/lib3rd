import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TypeOptionalitySpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnTypeVisitor } from './asnType';
import { IOptionalitySpec } from './fieldSpec';

/**
 * ANTLR4 grammar
 * ```
 * typeOptionalitySpec : OPTIONAL_LITERAL | (DEFAULT_LITERAL asnType)
 * ```
 */
export class TypeOptionalitySpecVisitor extends AbstractParseTreeVisitor<IOptionalitySpec>
                                  implements ASN_3gppVisitor<IOptionalitySpec> {
  public defaultResult(): IOptionalitySpec {
    return undefined;
  }

  public visitChildren(typeOptionalitySpecCtx: TypeOptionalitySpecContext): IOptionalitySpec {
    const [optionalOrDefaultCtx, asnTypeCtx] = typeOptionalitySpecCtx.children;
    if (asnTypeCtx) {
      return {
        optional: undefined,
        default: asnTypeCtx.accept(new AsnTypeVisitor()),
      };
    } else {
      return {
        optional: true,
      };
    }
  }
}
