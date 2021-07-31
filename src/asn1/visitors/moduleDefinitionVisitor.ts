/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { DefinitiveIdentification } from '../classes/definitiveIdentification';
import { ModuleDefinition } from '../classes/moduleDefinition';
import { ModuleDefinitionContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { IDefinitiveObjIdComponent } from '../types/definitiveObjIdComponent';
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
  implements grammar3rdVisitor<ModuleDefinition> {
  public visitChildren(ctx: ModuleDefinitionContext): ModuleDefinition {
    const name = ctx.getChild(0).text;
    const definitiveIdentificationArr: IDefinitiveObjIdComponent[] = [];
    if (ctx.childCount > 8) {
      const indexStart = 2;
      const indexStop = ctx.childCount - 8;
      for (let i = indexStart; i < indexStop; i += 4) {
        const doiName = ctx.getChild(i).text;
        const number = ctx.getChild(i + 2).text;
        definitiveIdentificationArr.push({ name: doiName, number });
      }
    }
    const definitiveIdentification = new DefinitiveIdentification(
      definitiveIdentificationArr,
    );
    const tagDefault = ctx.tagDefault().accept(new TagDefaultVisitor());
    const extensionDefault = ctx
      .extensionDefault()
      .accept(new ExtensionDefaultVisitor());
    const moduleBody = ctx.moduleBody().accept(new ModuleBodyVisitor());
    return new ModuleDefinition(
      name,
      definitiveIdentification,
      tagDefault,
      extensionDefault,
      moduleBody,
    );
  }

  protected defaultResult(): ModuleDefinition {
    throw Error();
  }
}
