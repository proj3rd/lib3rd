const reTag = /^-- *?(Need|Cond) *?.+?$/;

/**
 * ANTLR4 grammar
 * ```
 * tag
 *   : TAG
 *   ;
 *
 * TAG
 *   | '--' ~('\n'|'\r')*
 *   ;
 * ```
 */
export class TagVisitor {
  public visitChildren(tagCtx: any): any /* TODO */ {
    const childCtx = tagCtx.children[0];
    // FIXME: ASN_3gpp.g4 not working properly
    // Temporary workaround
    const tag: string = childCtx.getText();
    if (tag.match(reTag)) {
      return tag;
    }
    return null;
  }
}
