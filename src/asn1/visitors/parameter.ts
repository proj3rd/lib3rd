import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ParameterContext, ParamGovernorContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { IDefinedObjectClass } from './definedObjectClass';
import { ParamGovernorVisitor } from './paramGovernor';

export interface IParameter {
  paramGovernor: AsnType | IDefinedObjectClass | string;
  parameterName: string;
}

/**
 * ANTLR4 grammar
 * ```
 * parameter : (paramGovernor COLON)? IDENTIFIER
 * ```
 */
export class ParameterVisitor extends AbstractParseTreeVisitor<IParameter> implements ASN_3gppVisitor<IParameter> {
  public defaultResult(): IParameter {
    return undefined;
  }

  public visitChildren(parameterCtx: ParameterContext): IParameter {
    const { children } = parameterCtx;
    const parameter: IParameter = {
      paramGovernor: undefined,
      parameterName: undefined,
    };
    if (children[0] instanceof ParamGovernorContext) {
      parameter.paramGovernor = children[0].accept(new ParamGovernorVisitor());
      parameter.parameterName = children[2].text;
    } else {
      parameter.parameterName = children[0].text;
    }
    return parameter;
  }
}
