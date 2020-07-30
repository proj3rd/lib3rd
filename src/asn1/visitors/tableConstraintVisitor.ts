import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ComponentRelationConstraint } from '../classes/componentRelationConstraint';
import { TableConstraintContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ComponentRelationConstraintVisitor } from './componentRelationConstraintVisitor';

/**
 * # Grammar
 * ```
 * tableConstraint: componentRelationConstraint
 * ```
 */
export class TableConstraintVisitor
  extends AbstractParseTreeVisitor<ComponentRelationConstraint>
  implements ASN_3gppVisitor<ComponentRelationConstraint> {
  public visitChildren(
    ctx: TableConstraintContext
  ): ComponentRelationConstraint {
    const componentRelationConstraintCtx = ctx.componentRelationConstraint();
    return componentRelationConstraintCtx.accept(
      new ComponentRelationConstraintVisitor()
    );
  }

  protected defaultResult(): ComponentRelationConstraint {
    return unimpl();
  }
}
