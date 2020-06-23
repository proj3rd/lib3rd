import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _SubtypeConstraint } from '../classes/constraint';
import { SubtypeConstraintContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { unimpl } from './_devUtils';
import { ElementSetSpecsVisitor } from './elementSetSpecsVisitor';

/**
 * # Grammar
 * ```
 * subtypeConstraint: elementSetSpecs
 * ```
 */
export class SubtypeConstraintVisitor
  extends AbstractParseTreeVisitor<_SubtypeConstraint>
  implements ASN_3gppVisitor<_SubtypeConstraint> {
  public visitChildren(ctx: SubtypeConstraintContext): _SubtypeConstraint {
    const elementSetSpecsCtx = ctx.elementSetSpecs();
    return elementSetSpecsCtx.accept(new ElementSetSpecsVisitor());
  }

  protected defaultResult(): _SubtypeConstraint {
    return unimpl();
  }
}
