import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import { ParamGovernorContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ParamGovernor } from '../types';
import { GovernorVisitor } from './governorVisitor';

/**
 * # Grammar
 * ```
 * paramGovernor: governor | IDENTIFIER
 * ```
 */
export class ParamGovernorVisitor
  extends AbstractParseTreeVisitor<ParamGovernor>
  implements ASN_3gppVisitor<ParamGovernor> {
  public visitChildren(ctx: ParamGovernorContext): ParamGovernor {
    const governorCtx = ctx.governor();
    if (governorCtx === undefined) {
      return ctx.text;
    }
    return governorCtx.accept(new GovernorVisitor());
  }

  protected defaultResult(): ParamGovernor {
    return unimpl();
  }
}
