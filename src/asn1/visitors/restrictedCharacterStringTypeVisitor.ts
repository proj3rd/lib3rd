import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { CharacterStringTypeLiteral } from '../classes/characterStringType';
import { RestrictedCharacterStringTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

/**
 * # Grammar
 * ```
 * restrictedCharacterStringType:
 *     BMP_STRING_LITERAL
 *   | GRAPHIC_STRING_LITERAL
 *   | IA5_STRING_LITERAL
 *   | ISO646_STRING_LITERAL
 *   | NUMERIC_STRING_LITERAL
 *   | PRINTABLE_STRING_LITERAL
 *   | TELETEXT_STRING_LITERAL
 *   | T61_STRING_LITERAL
 *   | UNIVERSAL_STRING_LITERAL
 *   | UTF8_STRING_LITERAL
 *   | VIDEOTEX_STRING_LITERAL
 *   | VISIBLE_STRING_LITERAL
 * ```
 */
export class RestrictedCharacterStringTypeVisitor
  extends AbstractParseTreeVisitor<CharacterStringTypeLiteral>
  implements ASN_3gppVisitor<CharacterStringTypeLiteral> {
  public visitChildren(
    ctx: RestrictedCharacterStringTypeContext
  ): CharacterStringTypeLiteral {
    return ctx.text as CharacterStringTypeLiteral;
  }

  protected defaultResult(): CharacterStringTypeLiteral {
    return unimpl();
  }
}
