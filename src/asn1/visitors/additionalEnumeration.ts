import { EnumerationVisitor } from './enumeration';

/**
 * ANTLR4 grammar
 * ```
 * additionalEnumeration : enumeration
 * ```
 */
export class AdditionalEnumerationVisitor {
  public visitChildren(additionalEnumerationCtx: any): any /* TODO */ {
    const enumerationCtx = additionalEnumerationCtx.children[0];
    return enumerationCtx.accept(new EnumerationVisitor());
  }
}
