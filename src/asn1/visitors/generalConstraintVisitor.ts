import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { _GeneralConstraint } from '../classes/constraint';
import {
  ContentsConstraintContext,
  GeneralConstraintContext,
  TableConstraintContext,
  UserDefinedConstraintContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { unimpl } from './_devUtils';
import { ContentsConstraintVisitor } from './contentsConstraintVisitor';

/**
 * # Grammar
 * ```
 * generalConstraint: userDefinedConstraint | tableConstraint | contentsConstraint
 * ```
 */
export class GeneralConstraintVisitor
  extends AbstractParseTreeVisitor<_GeneralConstraint>
  implements ASN_3gppVisitor<_GeneralConstraint> {
  public visitChildren(ctx: GeneralConstraintContext): _GeneralConstraint {
    const childCtx = ctx.getChild(0);
    if (childCtx instanceof UserDefinedConstraintContext) {
      return unimpl();
    } else if (childCtx instanceof TableConstraintContext) {
      return unimpl();
    } else if (childCtx instanceof ContentsConstraintContext) {
      return childCtx.accept(new ContentsConstraintVisitor());
    } else {
      throw Error(ctx.text);
    }
  }

  protected defaultResult(): _GeneralConstraint {
    return unimpl();
  }
}
