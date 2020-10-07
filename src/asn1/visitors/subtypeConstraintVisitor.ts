/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { SubtypeConstraint } from '../classes/subtypeConstraint';
import { SubtypeConstraintContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ElementSetSpecsVisitor } from './elementSetSpecsVisitor';

/**
 * # Grammar
 * ```
 * subtypeConstraint: elementSetSpecs
 * ```
 */
export class SubtypeConstraintVisitor
  extends AbstractParseTreeVisitor<SubtypeConstraint>
  implements grammar3rdVisitor<SubtypeConstraint> {
  public visitChildren(ctx: SubtypeConstraintContext): SubtypeConstraint {
    const elementSetSpecsCtx = ctx.elementSetSpecs();
    const elementSetSpecList = elementSetSpecsCtx.accept(
      new ElementSetSpecsVisitor(),
    );
    return new SubtypeConstraint(elementSetSpecList);
  }

  protected defaultResult(): SubtypeConstraint {
    return unimpl();
  }
}
