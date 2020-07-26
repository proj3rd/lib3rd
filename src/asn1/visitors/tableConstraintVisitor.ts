import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { TableConstraintContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { TableConstraint } from '../types';
import { ComponentRelationConstraintVisitor } from './componentRelationConstraintVisitor';

/**
 * # Grammar
 * ```
 * tableConstraint: componentRelationConstraint
 * ```
 */
export class TableConstraintVisitor
  extends AbstractParseTreeVisitor<TableConstraint>
  implements ASN_3gppVisitor<TableConstraint> {
  public visitChildren(ctx: TableConstraintContext): TableConstraint {
    const componentRelationConstraintCtx = ctx.componentRelationConstraint();
    return componentRelationConstraintCtx.accept(
      new ComponentRelationConstraintVisitor()
    );
  }

  protected defaultResult(): TableConstraint {
    return unimpl();
  }
}
