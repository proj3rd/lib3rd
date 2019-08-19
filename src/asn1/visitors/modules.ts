import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ModulesContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { IModuleBody } from './moduleBody';
import { IModuleDefinition, ModuleDefinitionVisitor } from './moduleDefinition';

export interface IModules {
  [moduleName: string]: IModuleBody;
}

/**
 * ANTLR4 grammar
 * ```
 * modules: moduleDefinition+;
 * ```
 */
export class ModulesVisitor extends AbstractParseTreeVisitor<IModules> implements ASN_3gppVisitor<IModules> {
  public defaultResult(): IModules {
    return {};
  }

  public visitChildren(modulesCtx: ModulesContext): IModules {
    const modules: IModules = {};
    for (const moduleDefinitionCtx of modulesCtx.children) {
      const {moduleName, definition} = moduleDefinitionCtx.accept(new ModuleDefinitionVisitor());
      modules[moduleName] = definition;
    }
    return modules;
  }
}
