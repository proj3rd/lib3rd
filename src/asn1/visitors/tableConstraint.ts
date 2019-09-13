import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { TableConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { TableConstraint } from '../classes/tableConstraint';
import { ComponentRelationConstraintVisitor } from './componentRelationConstraint';

/**
 * ANTLR4 grammar
 * ```
 * tableConstraint : componentRelationConstraint
 * ```
 */
export class TableConstraintVisitor extends AbstractParseTreeVisitor<TableConstraint>
                                    implements ASN_3gppVisitor<TableConstraint> {
  public defaultResult(): TableConstraint {
    return undefined;
  }

  public visitChildren(tableConstraintCtx: TableConstraintContext): TableConstraint {
    return tableConstraintCtx.children[0].accept(new ComponentRelationConstraintVisitor());
  }
}
