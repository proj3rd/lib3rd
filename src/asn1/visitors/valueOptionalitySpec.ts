import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ValueOptionalitySpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IOptionalitySpec } from './fieldSpec';
import { ValueVisitor } from './value';

/**
 * ANTLR4 grammar
 * ```
 * valueOptionalitySpec : OPTIONAL_LITERAL | (DEFAULT_LITERAL value)
 * ```
 */
export class ValueOptionalitySpecVisitor extends AbstractParseTreeVisitor<IOptionalitySpec>
                                  implements ASN_3gppVisitor<IOptionalitySpec> {
  public defaultResult(): IOptionalitySpec {
    return undefined;
  }

  public visitChildren(valueOptionalitySpecCtx: ValueOptionalitySpecContext): IOptionalitySpec {
    const [optionalOrDefaultCtx, valueCtx] = valueOptionalitySpecCtx.children;
    if (valueCtx) {
      return {
        optional: undefined,
        default: valueCtx.accept(new ValueVisitor()),
      };
    } else {
      return {
        optional: true,
      };
    }
  }
}
