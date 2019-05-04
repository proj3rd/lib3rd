/**
 * ANTLR4 grammar
 * ```
 * signedNumber :  (MINUS)? NUMBER
 * ```
 */
export class SignedNumberVisitor {
  public visitChildren(signedNumberCtx: any): number {
    return Number(signedNumberCtx.getText());
  }
}
