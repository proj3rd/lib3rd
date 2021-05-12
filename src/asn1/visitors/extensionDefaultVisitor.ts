/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionDefaultContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ExtensionDefault } from '../types/extensionDefault';

/**
 * # Grammar
 * ```
 * extensionDefault: (EXTENSIBILITY_LITERAL IMPLIED_LITERAL)?
 * ```
 */
export class ExtensionDefaultVisitor
  extends AbstractParseTreeVisitor<ExtensionDefault>
  implements grammar3rdVisitor<ExtensionDefault> {
  public visitChildren(ctx: ExtensionDefaultContext): ExtensionDefault {
    if (ctx.childCount === 0) {
      return '';
    }
    return 'EXTENSIBILITY IMPLIED';
  }

  protected defaultResult(): ExtensionDefault {
    return '';
  }
}
