import { IModuleDefinition } from './moduleDefinition';
export interface IModules {
    [moduleName: string]: IModuleDefinition;
}
/**
 * ANTLR4 grammar
 * ```
 * modules: moduleDefinition+;
 * ```
 */
export declare class ModulesVisitor {
    visitChildren(modulesCtx: any): IModules;
}
