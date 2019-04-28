import { ElementSetSpecsVisitor } from './elementSetSpecs';

/**
 * ANTLR4 grammar
 * ```
 * subtypeConstraint	:
 * elementSetSpecs
 * ```
 */
export class SubtypeConstraintVisitor {
  public visitChildren(subtypeConstraintCtx: any): any /* TODO */ {
    const elementSetSpecs = subtypeConstraintCtx.children[0];
    return elementSetSpecs.accept(new ElementSetSpecsVisitor());
  }
}
