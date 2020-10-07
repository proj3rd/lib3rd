import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { CharacterStringType } from '../classes/characterStringType';
import { CharacterStringTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * characterStringType:
 *   restrictedCharacterStringType
 * ```
 */
export declare class CharacterStringTypeVisitor extends AbstractParseTreeVisitor<CharacterStringType> implements grammar3rdVisitor<CharacterStringType> {
    visitChildren(ctx: CharacterStringTypeContext): CharacterStringType;
    protected defaultResult(): CharacterStringType;
}
//# sourceMappingURL=characterStringTypeVisitor.d.ts.map