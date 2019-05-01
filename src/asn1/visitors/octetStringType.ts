import { OctetString } from '../classes/octetString';

/**
 * ANTLR4 grammar
 * ```
 * octetStringType  :  OCTET_LITERAL STRING_LITERAL
 * ```
 */
export class OctetStringTypeVisitor {
  public visitChildren(octetStringTypeCtx: any): OctetString {
    return new OctetString();
  }
}
