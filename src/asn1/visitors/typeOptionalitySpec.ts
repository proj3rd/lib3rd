import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TypeOptionalitySpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { AsnTypeVisitor } from './asnType';

interface ITypeOptionalitySpec {
  optional: boolean;
  default?: AsnType;
}

/**
 * ANTLR4 grammar
 * ```
 * typeOptionalitySpec : OPTIONAL_LITERAL | (DEFAULT_LITERAL asnType)
 * ```
 */
export class TypeOptionalitySpecVisitor extends AbstractParseTreeVisitor<ITypeOptionalitySpec>
                                  implements ASN_3gppVisitor<ITypeOptionalitySpec> {
  public defaultResult(): ITypeOptionalitySpec {
    return undefined;
  }

  public visitChildren(typeOptionalitySpecCtx: TypeOptionalitySpecContext): ITypeOptionalitySpec {
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
