/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { OctetStringType } from '../classes/octetStringType';
import { OctetStringTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

/**
 * # Grammar
 * ```
 * octetStringType: OCTET_LITERAL STRING_LITERAL
 * ```
 */
export class OctetStringTypeVisitor
  extends AbstractParseTreeVisitor<OctetStringType>
  implements grammar3rdVisitor<OctetStringType> {
  // eslint-disable-next-line no-unused-vars
  public visitChildren(ctx: OctetStringTypeContext): OctetStringType {
    return new OctetStringType();
  }

  protected defaultResult(): OctetStringType {
    return new OctetStringType();
  }
}
