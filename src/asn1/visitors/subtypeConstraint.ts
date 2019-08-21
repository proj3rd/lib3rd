import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { SubtypeConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IConstraint } from './elements';
import { ElementSetSpecsVisitor } from './elementSetSpecs';

/**
 * ANTLR4 grammar
 * ```
 * subtypeConstraint	:
 * elementSetSpecs
 * ```
 */
export class SubtypeConstraintVisitor extends AbstractParseTreeVisitor<IConstraint>
                                      implements ASN_3gppVisitor<IConstraint> {
  public defaultResult(): IConstraint {
    return undefined;
  }

  public visitChildren(subtypeConstraintCtx: SubtypeConstraintContext): IConstraint {
    const elementSetSpecs = subtypeConstraintCtx.children[0];
    return elementSetSpecs.accept(new ElementSetSpecsVisitor());
  }
}
