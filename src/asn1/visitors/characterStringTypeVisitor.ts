import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import { CharacterStringType } from '../classes/characterStringType';
import { CharacterStringTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
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
  implements ASN_3gppVisitor<CharacterStringType> {
  public visitChildren(ctx: CharacterStringTypeContext): CharacterStringType {
    const restrictedCharacterStringTypeCtx = ctx.restrictedCharacterStringType();
    const restrictedCharacterStringType = restrictedCharacterStringTypeCtx.accept(
      new RestrictedCharacterStringTypeVisitor()
    );
    return new CharacterStringType(restrictedCharacterStringType);
  }

  protected defaultResult(): CharacterStringType {
    return unimpl();
  }
}
