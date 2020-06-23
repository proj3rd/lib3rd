import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ModuleDefinition } from '../classes/moduleDefinition';
import { ModuleDefinitionContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ExtensionDefaultVisitor } from './extensionDefaultVisitor';
import { ModuleBodyVisitor } from './moduleBodyVisitor';
import { TagDefaultVisitor } from './tagDefaultVisitor';

/**
 * # Grammar
 * ```
 * moduleDefinition: IDENTIFIER
 *   (L_BRACE (IDENTIFIER L_PARAN NUMBER R_PARAN)* R_BRACE)?
 *   DEFINITIONS_LITERAL
 *   tagDefault
 *   extensionDefault
 *   ASSIGN_OP BEGIN_LITERAL
 *   moduleBody
 *   END_LITERAL
 * ```
 */
export class ModuleDefinitionVisitor
  extends AbstractParseTreeVisitor<ModuleDefinition>
  implements ASN_3gppVisitor<ModuleDefinition> {
  public visitChildren(ctx: ModuleDefinitionContext): ModuleDefinition {
    if (ctx.childCount > 8) {
      throw Error('DefinitiveIdentification is not implemented');
    }
    const name = ctx.getChild(0).text;
    const tagDefault = ctx.tagDefault().accept(new TagDefaultVisitor());
    const extensionDefault = ctx
      .extensionDefault()
      .accept(new ExtensionDefaultVisitor());
    const moduleBody = ctx.moduleBody().accept(new ModuleBodyVisitor());
    return new ModuleDefinition(name, tagDefault, extensionDefault, moduleBody);
  }

  protected defaultResult(): ModuleDefinition {
    throw Error();
  }
}
