import { EnumerationVisitor } from './enumeration';

/**
 * ANTLR4 grammar
 * ```
 * rootEnumeration : enumeration
 * ```
 */
export class RootEnumerationVisitor {
  public visitChildren(rootEnumerationCtx: any): any /* TODO */ {
    const enumerationCtx = rootEnumerationCtx.children[0];
    return enumerationCtx.accept(new EnumerationVisitor());
  }
}
