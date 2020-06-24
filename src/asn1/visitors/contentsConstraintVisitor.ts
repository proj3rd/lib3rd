import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../_devUtils';
import { AsnType } from '../classes/asnType';
import { _GeneralConstraint } from '../classes/constraint';
import { ContentsConstraint } from '../classes/contentsConstraint';
import { InnerTypeConstraints } from '../classes/innerTypeConstraints';
import { Value } from '../classes/value';
import { ContentsConstraintContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { AsnTypeVisitor } from './asnTypeVisitor';
import { ComponentPresenceListsVisitor } from './componentPresenceListsVisitor';
import { ValueVisitor } from './valueVisitor';

/**
 * # Grammar
 * ```
 * contentsConstraint :
 *     CONTAINING_LITERAL asnType
 *   | ENCODED_LITERAL BY_LITERAL value
 *   | CONTAINING_LITERAL asnType ENCODED_LITERAL BY_LITERAL value
 *   | WITH_LITERAL COMPONENTS_LITERAL L_BRACE componentPresenceLists R_BRACE
 * ```
 */
export class ContentsConstraintVisitor
  extends AbstractParseTreeVisitor<_GeneralConstraint>
  implements ASN_3gppVisitor<_GeneralConstraint> {
  public visitChildren(ctx: ContentsConstraintContext): _GeneralConstraint {
    const asnTypeCtx = ctx.asnType();
    let asnType: AsnType | undefined;
    if (asnTypeCtx !== undefined) {
      asnType = asnTypeCtx.accept(new AsnTypeVisitor());
    }
    const valueCtx = ctx.value();
    let value: Value | undefined;
    if (valueCtx !== undefined) {
      value = valueCtx.accept(new ValueVisitor());
    }
    const componentPresenceListsCtx = ctx.componentPresenceLists();
    if (componentPresenceListsCtx !== undefined) {
      const componentPresenceLists = componentPresenceListsCtx.accept(
        new ComponentPresenceListsVisitor()
      );
      return new InnerTypeConstraints(componentPresenceLists);
    }
    if (asnType === undefined && value === undefined) {
      throw Error();
    }
    return new ContentsConstraint(asnType, value);
  }

  protected defaultResult(): _GeneralConstraint {
    return unimpl();
  }
}
