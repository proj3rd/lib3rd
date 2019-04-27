import { DefinedTypeVisitor } from './definedType';

/**
 * ANTLR4 grammar
 * ```
 * referencedType :
 *   definedType
 * ```
 */
export class ReferencedTypeVisitor {
  public visitChildren(referencedTypeCtx: any): any /* TODO */ {
    const definedTypeCtx = referencedTypeCtx.children[0];
    return definedTypeCtx.accept(new DefinedTypeVisitor());
  }
}
