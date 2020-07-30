import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { SubtypeConstraint } from '../classes/subtypeConstraint';
import { SubtypeConstraintContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ElementSetSpecsVisitor } from './elementSetSpecsVisitor';

/**
 * # Grammar
 * ```
 * subtypeConstraint: elementSetSpecs
 * ```
 */
export class SubtypeConstraintVisitor
  extends AbstractParseTreeVisitor<SubtypeConstraint>
  implements ASN_3gppVisitor<SubtypeConstraint> {
  public visitChildren(ctx: SubtypeConstraintContext): SubtypeConstraint {
    const elementSetSpecsCtx = ctx.elementSetSpecs();
    const elementSetSpecList = elementSetSpecsCtx.accept(
      new ElementSetSpecsVisitor()
    );
    return new SubtypeConstraint(elementSetSpecList);
  }

  protected defaultResult(): SubtypeConstraint {
    return unimpl();
  }
}
