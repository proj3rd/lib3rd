import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionDefault } from '../classes/moduleDefinition';
import { ExtensionDefaultContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

/**
 * # Grammar
 * ```
 * extensionDefault: (EXTENSIBILITY_LITERAL IMPLIED_LITERAL)?
 * ```
 */
export class ExtensionDefaultVisitor
  extends AbstractParseTreeVisitor<ExtensionDefault>
  implements ASN_3gppVisitor<ExtensionDefault> {
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
