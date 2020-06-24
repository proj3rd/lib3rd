import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../_devUtils';
import { Parameter } from '../classes/parameter';
import { ParameterContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

/**
 * # Grammar
 * ```
 * parameter: (paramGovernor COLON)? IDENTIFIER
 * ```
 */
export class ParameterVisitor extends AbstractParseTreeVisitor<Parameter>
  implements ASN_3gppVisitor<Parameter> {
  public visitChildren(ctx: ParameterContext): Parameter {
    const { childCount } = ctx;
    if (childCount > 1) {
      return unimpl();
    }
    const dummyReferenceCtx = ctx.getChild(childCount - 1);
    const dummyReference = dummyReferenceCtx.text;
    return new Parameter(dummyReference);
  }

  protected defaultResult(): Parameter {
    return unimpl();
  }
}
