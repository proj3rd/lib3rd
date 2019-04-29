import { Enumerated } from '../classes/enumerated';
import { EnumerationsVisitor } from './enumerations';

/**
 * ANTLR4 grammar
 * ```
 * enumeratedType : ENUMERATED_LITERAL L_BRACE enumerations R_BRACE
 * ```
 */
export class EnumeratedTypeVisitor {
  public visitChildren(enumeratedTypeCtx: any): any /* TODOO */ {
    const enumerationsCtx = enumeratedTypeCtx.children[2];
    return new Enumerated(enumerationsCtx.accept(new EnumerationsVisitor()));
  }
}
