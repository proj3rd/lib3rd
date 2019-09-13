import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { AtNotationContext, ComponentRelationConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AtNotationVisitor } from './atNotation';

export interface IComponentRelationConstraint {
  moduleReference?: string;
  objectSetReference: string;
  atNotations?: string[];
}

/**
 * ANTLR4 grammar
 * ```
 * componentRelationConstraint : L_BRACE (IDENTIFIER (DOT IDENTIFIER)?) R_BRACE
 *      (L_BRACE atNotation (COMMA atNotation)* R_BRACE)?
 * ```
 */
export class ComponentRelationConstraintVisitor extends AbstractParseTreeVisitor<IComponentRelationConstraint>
                                                implements ASN_3gppVisitor<IComponentRelationConstraint> {
  public defaultResult(): IComponentRelationConstraint {
    return undefined;
  }

  public visitChildren(componentRelationConstraintCtx: ComponentRelationConstraintContext)
      : IComponentRelationConstraint {
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
    return { moduleReference, objectSetReference, atNotations };
  }
}
