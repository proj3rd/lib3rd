import { EnumerationItemVisitor } from './enumerationItem';

/**
 * ANTLR4 grammar
 * ```
 * enumeration : enumerationItem ( COMMA enumerationItem)*
 * ```
 */
export class EnumerationVisitor {
  public visitChildren(enumerationCtx: any): any /* TODO */ {
    const childCtxes = enumerationCtx.children;
    const enumeration = [];
    childCtxes.forEach((childCtx: any, index: any) => {
      if (index  % 2) {
        return;
      }
      enumeration.push(childCtx.accept(new EnumerationItemVisitor()));
    });
    return enumeration;
  }
}
