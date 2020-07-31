import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { _GeneralConstraint } from '../types';
import {
  ContentsConstraintContext,
  GeneralConstraintContext,
  TableConstraintContext,
  UserDefinedConstraintContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ContentsConstraintVisitor } from './contentsConstraintVisitor';
import { TableConstraintVisitor } from './tableConstraintVisitor';

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
      return childCtx.accept(new TableConstraintVisitor());
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
