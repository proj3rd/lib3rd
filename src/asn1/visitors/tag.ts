import { getContextName } from '../utils';

/**
 * ANTLR4 grammar
 * ```
 * tag
 *   : needTag
 *   | condTag
 *   | INVALID_TAG
 *   ;
 * needTag
 *  : NEED_LITERAL IDENTIFIER
 *  ;
 * condTag
 *   : COND_LITERAL IDENTIFIER
 *   ;
 * ```
 */
export class TagVisitor {
  public visitChildren(tagCtx: any): any /* TODO */ {
    const childCtx = tagCtx.children[0];
    switch (getContextName(childCtx)) {
      case 'needTag': {
        // needTag and condTag have the same logic
      }
      case 'condTag': {
        return childCtx.getText();
      }
      default: {
        return null;
      }
    }
  }
}
