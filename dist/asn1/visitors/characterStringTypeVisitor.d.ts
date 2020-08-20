import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { CharacterStringType } from '../classes/characterStringType';
import { CharacterStringTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * characterStringType:
 *   restrictedCharacterStringType
 * ```
 */
export declare class CharacterStringTypeVisitor extends AbstractParseTreeVisitor<CharacterStringType> implements ASN_3gppVisitor<CharacterStringType> {
    visitChildren(ctx: CharacterStringTypeContext): CharacterStringType;
    protected defaultResult(): CharacterStringType;
}
//# sourceMappingURL=characterStringTypeVisitor.d.ts.map