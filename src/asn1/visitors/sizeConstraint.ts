import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { SizeConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { SingleValue } from '../classes/singleValue';
import { SizeConstraint } from '../classes/sizeConstraint';
import { ValueRange } from '../classes/valueRange';
import { ConstraintVisitor } from './constraint';
import { ElementSetSpecs } from './elementSetSpecs';

/**
 * ANTLR4 grammar
 * ```
 * sizeConstraint : SIZE_LITERAL constraint
 * ```
 */
export class SizeConstraintVisitor extends AbstractParseTreeVisitor<SizeConstraint>
                                   implements ASN_3gppVisitor<SizeConstraint> {
  public defaultResult(): SizeConstraint {
    return undefined;
  }

  public visitChildren(sizeConstraintCtx: SizeConstraintContext): SizeConstraint {
    const childCtxes = sizeConstraintCtx.children;
    /** NOTE: It seems ciruclar function call
     * But it is expected to be {min, max} according to below:
     * X.680-201508, 51.5 Size constraint
     *   51.5.2 A "SizeConstraint" can only be applied to bit string types,
     *     octet string types, character string types, set-of types or sequence-of types.
     *   51.5.3 The "Constraint" specifies the permitted integer values for
     *     the length of the specified values, and takes the form of any constraint
     *     which can be applied to the following parent type:
     */
    const constraintCtx = childCtxes[1];
    const sizeConstraint = (constraintCtx.accept(new ConstraintVisitor()) as ElementSetSpecs)[0];
    if (sizeConstraint instanceof SingleValue || sizeConstraint instanceof ValueRange) {
      return new SizeConstraint(sizeConstraint);
    }
    return undefined;
  }
}
