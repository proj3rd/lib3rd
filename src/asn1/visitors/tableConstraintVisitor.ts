/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ComponentRelationConstraint } from '../classes/componentRelationConstraint';
import { TableConstraintContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ComponentRelationConstraintVisitor } from './componentRelationConstraintVisitor';

/**
 * # Grammar
 * ```
 * tableConstraint: componentRelationConstraint
 * ```
 */
export class TableConstraintVisitor
  extends AbstractParseTreeVisitor<ComponentRelationConstraint>
  implements grammar3rdVisitor<ComponentRelationConstraint> {
  public visitChildren(
    ctx: TableConstraintContext,
  ): ComponentRelationConstraint {
    const componentRelationConstraintCtx = ctx.componentRelationConstraint();
    return componentRelationConstraintCtx.accept(
      new ComponentRelationConstraintVisitor(),
    );
  }

  protected defaultResult(): ComponentRelationConstraint {
    return unimpl();
  }
}
