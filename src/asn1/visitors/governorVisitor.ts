import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl, unreach } from 'unimpl';
import { GovernorContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { Governor } from '../types';
import { AsnTypeVisitor } from './asnTypeVisitor';
import { DefinedObjectClassVisitor } from './definedObjectClassVisitor';

/**
 * # Grammar
 * ```
 * governor: asnType | definedObjectClass
 * ```
 */
export class GovernorVisitor extends AbstractParseTreeVisitor<Governor>
  implements ASN_3gppVisitor<Governor> {
  public visitChildren(ctx: GovernorContext): Governor {
    const asnTypeCtx = ctx.asnType();
    if (asnTypeCtx !== undefined) {
      return asnTypeCtx.accept(new AsnTypeVisitor());
    }
    const definedObjectClassCtx = ctx.definedObjectClass();
    if (definedObjectClassCtx !== undefined) {
      return definedObjectClassCtx.accept(new DefinedObjectClassVisitor());
    }
    return unreach();
  }

  protected defaultResult(): Governor {
    return unimpl();
  }
}
