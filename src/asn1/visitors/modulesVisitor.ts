/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Modules } from '../classes/modules';
import { ModulesContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ModuleDefinitionVisitor } from './moduleDefinitionVisitor';

/**
 * # Grammar
 * ```
 * modules: moduleDefinition
 * ```
 */
export class ModulesVisitor extends AbstractParseTreeVisitor<Modules>
  implements grammar3rdVisitor<Modules> {
  public visitChildren(ctx: ModulesContext): Modules {
    const children = ctx.moduleDefinition();
    const modules = children.map((child) => child.accept(new ModuleDefinitionVisitor()));
    return new Modules(modules);
  }

  protected defaultResult(): Modules {
    return new Modules();
  }
}
