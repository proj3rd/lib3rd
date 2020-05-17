import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

import { log } from '../../utils/logging';

import { GovernorContext, ParamGovernorContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { DefinedObjectClass } from '../classes/definedObjectClass';
import { getLogWithAsn1 } from '../utils';
import { GovernorVisitor } from './governor';

export type ParamGovernor = AsnType | DefinedObjectClass | string;

/**
 * ANTLR4 grammar
 * ```
 * paramGovernor : governor | IDENTIFIER
 * ```
 */
export class ParamGovernorVisitor extends AbstractParseTreeVisitor<ParamGovernor>
                                  implements ASN_3gppVisitor<ParamGovernor> {
  public defaultResult(): ParamGovernor {
    return undefined;
  }

  public visitChildren(paramGovernorCtx: ParamGovernorContext): ParamGovernor {
    const { children } = paramGovernorCtx;
    if (children[0] instanceof GovernorContext) {
      return children[0].accept(new GovernorVisitor());
    } else if (children[0] instanceof TerminalNode) {
      return children[0].text;
    } else {
      log.warn(new Error(getLogWithAsn1(paramGovernorCtx, 'Unknown ASN.1')));
    }
  }
}
