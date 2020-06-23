import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Modules } from '../classes/modules';
import { ModulesContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ModuleDefinitionVisitor } from './moduleDefinitionVisitor';

/**
 * # Grammar
 * ```
 * modules: moduleDefinition
 * ```
 */
export class ModulesVisitor extends AbstractParseTreeVisitor<Modules>
  implements ASN_3gppVisitor<Modules> {
  public visitChildren(ctx: ModulesContext): Modules {
    const children = ctx.moduleDefinition();
    const modules = children.map((child) =>
      child.accept(new ModuleDefinitionVisitor())
    );
    return new Modules(modules);
  }

  protected defaultResult(): Modules {
    return new Modules();
  }
}
