import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { VersionNumberContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

/**
 * # Grammar
 * ```
 * versionNumber: (NUMBER COLON)?
 * ```
 */
export class VersionNumberVisitor
  extends AbstractParseTreeVisitor<number | undefined>
  implements ASN_3gppVisitor<number | undefined> {
  public visitChildren(ctx: VersionNumberContext): number | undefined {
    if (ctx.childCount === 0) {
      return undefined;
    }
    const firstCtx = ctx.getChild(0);
    return +firstCtx.text;
  }

  protected defaultResult(): number | undefined {
    return unimpl();
  }
}
