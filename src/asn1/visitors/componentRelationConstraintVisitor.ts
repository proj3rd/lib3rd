import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ComponentRelationConstraint } from '../classes/componentRelationConstraint';
import { ExternalObjectSetReference } from '../classes/externalObjectSetReference';
import { ObjectSetReference } from '../classes/objectSetReference';
import { ComponentRelationConstraintContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { DefinedObjectSet } from '../types';
import { AtNotationVisitor } from './atNotationVisitor';

/**
 * # Grammar
 * ```
 * componentRelationConstraint: L_BRACE (IDENTIFIER (DOT IDENTIFIER)?) R_BRACE
 * (L_BRACE atNotation (COMMA atNotation)* R_BRACE)?
 * ```
 * If atNotation is not present, it is SimpleTableConstraint (= ObjectSet) defined by X.682 clause 10,
 *   but it can be further concluded to ComponentRelationConstraint as defeind by
 *     X.680 clause 50.1 and X.681 clause 12.10.
 * Otherwise, it is ComponentRelationConstraint
 */
export class ComponentRelationConstraintVisitor
  extends AbstractParseTreeVisitor<ComponentRelationConstraint>
  implements ASN_3gppVisitor<ComponentRelationConstraint> {
  public visitChildren(
    ctx: ComponentRelationConstraintContext
  ): ComponentRelationConstraint {
    let definedObjectSet: DefinedObjectSet | undefined;
    const { childCount } = ctx;
    let firstCurlyRightIndex = -1;
    for (let i = 0; i < childCount; i++) {
      if (ctx.getChild(i).text === '}') {
        firstCurlyRightIndex = i;
        break;
      }
    }
    if (firstCurlyRightIndex === 2) {
      const objectSetReference = ctx.getChild(1).text;
      definedObjectSet = new ObjectSetReference(objectSetReference);
    } else if (firstCurlyRightIndex === 4) {
      const moduleReference = ctx.getChild(1).text;
      const objectSetReference = ctx.getChild(3).text;
      definedObjectSet = new ExternalObjectSetReference(
        moduleReference,
        objectSetReference
      );
    } else {
      throw Error();
    }
    const atNotationCtxes = ctx.atNotation();
    const atNotations = atNotationCtxes.map((atNotationCtx) =>
      atNotationCtx.accept(new AtNotationVisitor())
    );
    if (atNotations.length === 0) {
      return new ComponentRelationConstraint(definedObjectSet);
    }
    return new ComponentRelationConstraint(definedObjectSet, atNotations);
  }

  protected defaultResult(): ComponentRelationConstraint {
    return unimpl();
  }
}
