import { AsnTypeVisitor } from './asnType';

/**
 * ANTLR4 grammar
 * ```
 * typeAssignment :
 *       ASSIGN_OP
 *       asnType
 * ```
 */
export class TypeAssignmentVisitor {
  public visitChildren(typeAssignmentCtx: any): any /* TODO */ {
    return typeAssignmentCtx.children[1].accept(new AsnTypeVisitor());
  }
}
