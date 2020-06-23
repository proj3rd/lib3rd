import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedType } from '../classes/namedType';
import { NullType } from '../classes/nullType';
import { NamedTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { AsnTypeVisitor } from './asnTypeVisitor';

/**
 * # Grammar
 * ```
 * namedType: IDENTIFIER asnType
 * ```
 */
export class NamedTypeVisitor extends AbstractParseTreeVisitor<NamedType>
  implements ASN_3gppVisitor<NamedType> {
  public visitChildren(ctx: NamedTypeContext): NamedType {
    const name = ctx.getChild(0).text;
    const asnType = ctx.asnType().accept(new AsnTypeVisitor());
    return new NamedType(name, asnType);
  }

  protected defaultResult(): NamedType {
    return new NamedType('', NullType.getInstance());
  }
}
