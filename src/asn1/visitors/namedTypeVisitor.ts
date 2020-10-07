/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedType } from '../classes/namedType';
import { NullType } from '../classes/nullType';
import { NamedTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { AsnTypeVisitor } from './asnTypeVisitor';

/**
 * # Grammar
 * ```
 * namedType: IDENTIFIER asnType
 * ```
 */
export class NamedTypeVisitor extends AbstractParseTreeVisitor<NamedType>
  implements grammar3rdVisitor<NamedType> {
  public visitChildren(ctx: NamedTypeContext): NamedType {
    const name = ctx.getChild(0).text;
    const asnType = ctx.asnType().accept(new AsnTypeVisitor());
    return new NamedType(name, asnType);
  }

  protected defaultResult(): NamedType {
    return new NamedType('', NullType.getInstance());
  }
}
