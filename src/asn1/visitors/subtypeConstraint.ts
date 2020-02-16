import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { SubtypeConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ElementsTypes } from './elements';
import { ElementSetSpecs, ElementSetSpecsVisitor } from './elementSetSpecs';

/**
 * ANTLR4 grammar
 * ```
 * subtypeConstraint	:
 * elementSetSpecs
 * ```
 */
export class SubtypeConstraintVisitor extends AbstractParseTreeVisitor<ElementSetSpecs>
                                      implements ASN_3gppVisitor<ElementSetSpecs> {
  public defaultResult(): ElementSetSpecs {
    return undefined;
  }

  public visitChildren(subtypeConstraintCtx: SubtypeConstraintContext): ElementSetSpecs {
    const elementSetSpecs = subtypeConstraintCtx.children[0];
    return elementSetSpecs.accept(new ElementSetSpecsVisitor());
  }
}
