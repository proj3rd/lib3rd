/**
 * ANTLR4 grammar
 * ```
 * enumeratedValue  : IDENTIFIER
 * ```
 */
export class EnumeratedValueVisitor {
  public visitChildren(enumeratedValueCtx: any): string {
    return enumeratedValueCtx.getText();
  }
}
