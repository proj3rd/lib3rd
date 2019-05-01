import { NamedType } from '../classes/namedType';

import { AsnTypeVisitor } from './asnType';

/**
 * ANTLR4
 * ```
 * namedType : IDENTIFIER   asnType
 * ```
 */
export class NamedTypeVisitor {
  public visitChildren(namedTypeCtx: any): any /* TODO */ {
    const childCtxes = namedTypeCtx.children;
    const nameCtx = childCtxes[0];
    const asnTypeCtx = childCtxes[1];

    const named = nameCtx.getText();
    const asnType = asnTypeCtx.accept(new AsnTypeVisitor());
    return new NamedType(named, asnType);
  }
}
