import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ParameterContext, ParamGovernorContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { Parameter } from '../classes/parameter';
import { ParamGovernor, ParamGovernorVisitor } from './paramGovernor';

/**
 * ANTLR4 grammar
 * ```
 * parameter : (paramGovernor COLON)? IDENTIFIER
 * ```
 */
export class ParameterVisitor extends AbstractParseTreeVisitor<Parameter> implements ASN_3gppVisitor<Parameter> {
  public defaultResult(): Parameter {
    return undefined;
  }

  public visitChildren(parameterCtx: ParameterContext): Parameter {
    const { children } = parameterCtx;
    let paramGovernor: ParamGovernor;
    let dummyReference: string;
    if (children[0] instanceof ParamGovernorContext) {
      paramGovernor = children[0].accept(new ParamGovernorVisitor());
      dummyReference = children[2].text;
    } else {
      dummyReference = children[0].text;
    }
    return new Parameter(paramGovernor, dummyReference);
  }
}
