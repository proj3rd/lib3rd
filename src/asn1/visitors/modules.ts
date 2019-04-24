import { IModuleDefinition, ModuleDefinitionVisitor } from './moduleDefinition';

export interface IModules {
  [moduleName: string]: IModuleDefinition;
}

/**
 * ANTLR4 grammar
 * ```
 * modules: moduleDefinition+;
 * ```
 */
export class ModulesVisitor {
  public visitChildren(modulesCtx: any): IModules {
    const modules: IModules = {};
    for (const moduleDefinitionCtx of modulesCtx.children) {
      const {moduleName, definition} = moduleDefinitionCtx.accept(new ModuleDefinitionVisitor());
      modules[moduleName] = definition;
    }
    return modules;
  }
}
