import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { CharacterStringTypeLiteral } from '../classes/characterStringType';
import { RestrictedCharacterStringTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
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
export declare class RestrictedCharacterStringTypeVisitor extends AbstractParseTreeVisitor<CharacterStringTypeLiteral> implements grammar3rdVisitor<CharacterStringTypeLiteral> {
    visitChildren(ctx: RestrictedCharacterStringTypeContext): CharacterStringTypeLiteral;
    protected defaultResult(): CharacterStringTypeLiteral;
}
//# sourceMappingURL=restrictedCharacterStringTypeVisitor.d.ts.map