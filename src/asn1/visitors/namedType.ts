import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedType } from '../classes/namedType';

import { NamedTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnTypeVisitor } from './asnType';

/**
 * ANTLR4
 * ```
 * namedType : IDENTIFIER   asnType
 * ```
 */
export class NamedTypeVisitor extends AbstractParseTreeVisitor<NamedType> implements ASN_3gppVisitor<NamedType> {
  public defaultResult(): NamedType {
    return undefined;
  }

  public visitChildren(namedTypeCtx: NamedTypeContext): NamedType {
    const childCtxes = namedTypeCtx.children;
    const nameCtx = childCtxes[0];
    const asnTypeCtx = childCtxes[1];

    const named = nameCtx.text;
    const asnType = asnTypeCtx.accept(new AsnTypeVisitor());
    return new NamedType(named, asnType);
  }
}
