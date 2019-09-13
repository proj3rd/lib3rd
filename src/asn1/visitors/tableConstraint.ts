import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { TableConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ComponentRelationConstraintVisitor, IComponentRelationConstraint } from './componentRelationConstraint';

/**
 * ANTLR4 grammar
 * ```
 * tableConstraint : componentRelationConstraint
 * ```
 */
export class TableConstraintVisitor extends AbstractParseTreeVisitor<IComponentRelationConstraint>
                                    implements ASN_3gppVisitor<IComponentRelationConstraint> {
  public defaultResult(): IComponentRelationConstraint {
    return undefined;
  }

  public visitChildren(tableConstraintCtx: TableConstraintContext): IComponentRelationConstraint {
    return tableConstraintCtx.children[0].accept(new ComponentRelationConstraintVisitor());
  }
}
