/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { ExtensionMarker } from '../classes/extensionMarker';
import { ExtensionAndExceptionContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

/**
 * # Grammar
 * ```
 * extensionAndException: ELLIPSIS exceptionSpec?
 * ```
 */
export class ExtensionAndExceptionVisitor
  extends AbstractParseTreeVisitor<ExtensionMarker>
  implements grammar3rdVisitor<ExtensionMarker> {
  public visitChildren(ctx: ExtensionAndExceptionContext): ExtensionMarker {
    const exceptionSpecCtx = ctx.exceptionSpec();
    if (exceptionSpecCtx !== undefined) {
      unimpl(ctx.text);
    }
    return ExtensionMarker.getInstance();
  }

  protected defaultResult(): ExtensionMarker {
    return unimpl();
  }
}
