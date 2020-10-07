/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { CharacterStringType } from '../classes/characterStringType';
import { CharacterStringTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { RestrictedCharacterStringTypeVisitor } from './restrictedCharacterStringTypeVisitor';

/**
 * # Grammar
 * ```
 * characterStringType:
 *   restrictedCharacterStringType
 * ```
 */
export class CharacterStringTypeVisitor
  extends AbstractParseTreeVisitor<CharacterStringType>
  implements grammar3rdVisitor<CharacterStringType> {
  public visitChildren(ctx: CharacterStringTypeContext): CharacterStringType {
    const restrictedCharacterStringTypeCtx = ctx.restrictedCharacterStringType();
    const restrictedCharacterStringType = restrictedCharacterStringTypeCtx.accept(
      new RestrictedCharacterStringTypeVisitor(),
    );
    return new CharacterStringType(restrictedCharacterStringType);
  }

  protected defaultResult(): CharacterStringType {
    return unimpl();
  }
}
