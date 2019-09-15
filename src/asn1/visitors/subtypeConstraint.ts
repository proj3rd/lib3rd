import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { SubtypeConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IConstraint } from './elements';
import { ElementSetSpec, ElementSetSpecsVisitor } from './elementSetSpecs';

/**
 * ANTLR4 grammar
 * ```
 * subtypeConstraint	:
 * elementSetSpecs
 * ```
 */
export class SubtypeConstraintVisitor extends AbstractParseTreeVisitor<ElementSetSpec>
                                      implements ASN_3gppVisitor<ElementSetSpec> {
  public defaultResult(): ElementSetSpec {
    return undefined;
  }

  public visitChildren(subtypeConstraintCtx: SubtypeConstraintContext): ElementSetSpec {
    const elementSetSpecs = subtypeConstraintCtx.children[0];
    return elementSetSpecs.accept(new ElementSetSpecsVisitor());
  }
}
