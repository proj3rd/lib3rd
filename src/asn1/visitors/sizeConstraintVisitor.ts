/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { BooleanValue } from '../classes/booleanValue';
import { ComponentRelationConstraint } from '../classes/componentRelationConstraint';
import { ContentsConstraint } from '../classes/contentsConstraint';
import { ExtensionMarker } from '../classes/extensionMarker';
import { InnerTypeConstraints } from '../classes/innerTypeConstraints';
import { IntegerValue } from '../classes/integerValue';
import { ObjectSet } from '../classes/objectSet';
import { SizeConstraint } from '../classes/sizeConstraint';
import { ValueRange } from '../classes/valueRange';
import { SizeConstraintContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ConstraintVisitor } from './constraintVisitor';

/**
 * # Grammar
 * ```
 * sizeConstraint: SIZE_LITERAL constraint
 * ```
 */
export class SizeConstraintVisitor
  extends AbstractParseTreeVisitor<SizeConstraint>
  implements grammar3rdVisitor<SizeConstraint> {
  public visitChildren(ctx: SizeConstraintContext): SizeConstraint {
    const constraintCtx = ctx.constraint();
    const constraint = constraintCtx.accept(new ConstraintVisitor());
    const { constraintSpec, exceptionSpec } = constraint;
    if (exceptionSpec !== undefined) {
      return unimpl();
    }
    if (constraintSpec instanceof ContentsConstraint) {
      return unimpl();
    } if (constraintSpec instanceof InnerTypeConstraints) {
      return unimpl();
    } if (constraintSpec instanceof ObjectSet) {
      return unimpl();
    } if (constraintSpec instanceof ComponentRelationConstraint) {
      return unimpl();
    }
    const sizeConstraint: Array<ExtensionMarker | IntegerValue | ValueRange> = [];
    for (let i = 0; i < constraintSpec.elementSetSpecList.length; i += 1) {
      const elementSetSpec = constraintSpec.elementSetSpecList[i];
      if (elementSetSpec instanceof ExtensionMarker) {
        sizeConstraint.push(elementSetSpec);
      } else {
        if (elementSetSpec.intersectionsList.length > 1) {
          return unimpl();
        }
        const intersections = elementSetSpec.intersectionsList[0];
        if (intersections.length !== 1) {
          throw Error();
        }
        const intersectionElements = intersections[0];
        if (intersectionElements instanceof IntegerValue) {
          sizeConstraint.push(intersectionElements);
        } else if (intersectionElements instanceof SizeConstraint) {
          return intersectionElements;
        } else if (intersectionElements instanceof ValueRange) {
          sizeConstraint.push(intersectionElements);
        } else if (intersectionElements instanceof BooleanValue) {
          return unimpl();
        } else if (typeof intersectionElements === 'string') {
          sizeConstraint.push(new IntegerValue(intersectionElements));
        } else {
          throw Error();
        }
      }
    }
    return new SizeConstraint(sizeConstraint);
  }

  protected defaultResult(): SizeConstraint {
    return unimpl();
  }
}
