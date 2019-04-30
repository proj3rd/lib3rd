import { AsnTypeVisitor } from './asnType';

/**
 * ANTLR4
 * ```
 * namedType : IDENTIFIER   asnType
 * ```
 */
export class NamedTypeVisitor {
  public visitChildren(namedTypeCtx: any): any /* TODO */ {
    const asnTypeCtx = namedTypeCtx.children[1];
    return asnTypeCtx.accept(new AsnTypeVisitor());
  }
}
