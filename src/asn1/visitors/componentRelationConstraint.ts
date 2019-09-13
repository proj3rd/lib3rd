import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { AtNotationContext, ComponentRelationConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { TableConstraint } from '../classes/tableConstraint';
import { AtNotationVisitor } from './atNotation';

/**
 * ANTLR4 grammar
 * ```
 * componentRelationConstraint : L_BRACE (IDENTIFIER (DOT IDENTIFIER)?) R_BRACE
 *      (L_BRACE atNotation (COMMA atNotation)* R_BRACE)?
 * ```
 */
export class ComponentRelationConstraintVisitor extends AbstractParseTreeVisitor<TableConstraint>
                                                implements ASN_3gppVisitor<TableConstraint> {
  public defaultResult(): TableConstraint {
    return undefined;
  }

  public visitChildren(componentRelationConstraintCtx: ComponentRelationConstraintContext): TableConstraint {
    let moduleReference: string;
    let objectSetReference: string;
    let offsetAtNotation: number;
    const { children } = componentRelationConstraintCtx;
    if (children[2].text === '.') {
      moduleReference = children[1].text;
      objectSetReference = children[3].text;
      offsetAtNotation = 5;
    } else {
      objectSetReference = children[1].text;
      offsetAtNotation = 3;
    }
    const atNotations = children.slice(offsetAtNotation)
                                .filter((ctx) => ctx instanceof AtNotationContext)
                                .map((atNotationCtx) => atNotationCtx.accept(new AtNotationVisitor()));
    return new TableConstraint(moduleReference, objectSetReference, atNotations);
  }
}
