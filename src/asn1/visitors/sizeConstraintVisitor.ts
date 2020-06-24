import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../_devUtils';
import { BooleanValue } from '../classes/booleanValue';
import { ContentsConstraint } from '../classes/contentsConstraint';
import { ExtensionMarker } from '../classes/extensionMarker';
import { InnerTypeConstraints } from '../classes/innerTypeConstraints';
import { IntegerValue } from '../classes/integerValue';
import { SizeConstraint } from '../classes/sizeConstraint';
import { ValueRange } from '../classes/valueRange';
import { SizeConstraintContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ConstraintVisitor } from './constraintVisitor';

/**
 * # Grammar
 * ```
 * sizeConstraint: SIZE_LITERAL constraint
 * ```
 */
export class SizeConstraintVisitor
  extends AbstractParseTreeVisitor<SizeConstraint>
  implements ASN_3gppVisitor<SizeConstraint> {
  public visitChildren(ctx: SizeConstraintContext): SizeConstraint {
    const constraintCtx = ctx.constraint();
    const constraint = constraintCtx.accept(new ConstraintVisitor());
    if (constraint instanceof ContentsConstraint) {
      return unimpl();
    } else if (constraint instanceof InnerTypeConstraints) {
      return unimpl();
    } else {
      if (constraint.length !== 1) {
        throw Error();
      }
      const elementSetSpec = constraint[0];
      if (elementSetSpec instanceof ExtensionMarker) {
        throw Error();
      }
      if (elementSetSpec.length !== 1) {
        throw Error();
      }
      const intersections = elementSetSpec[0];
      if (intersections.length !== 1) {
        throw Error();
      }
      const intersectionElements = intersections[0];
      if (intersectionElements instanceof IntegerValue) {
        return new SizeConstraint(intersectionElements);
      } else if (intersectionElements instanceof SizeConstraint) {
        return intersectionElements;
      } else if (intersectionElements instanceof ValueRange) {
        return new SizeConstraint(intersectionElements);
      } else if (intersectionElements instanceof BooleanValue) {
        return unimpl();
      } else if (typeof intersectionElements === 'string') {
        const integerValue = new IntegerValue(intersectionElements);
        return new SizeConstraint(integerValue);
      } else {
        throw Error();
      }
    }
  }

  protected defaultResult(): SizeConstraint {
    return unimpl();
  }
}
