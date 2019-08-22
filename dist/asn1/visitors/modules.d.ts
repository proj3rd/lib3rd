import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ModulesContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IModuleBody } from './moduleBody';
export interface IModules {
    [moduleName: string]: IModuleBody;
}
/**
 * ANTLR4 grammar
 * ```
 * modules: moduleDefinition+;
 * ```
 */
export declare class ModulesVisitor extends AbstractParseTreeVisitor<IModules> implements ASN_3gppVisitor<IModules> {
    defaultResult(): IModules;
    visitChildren(modulesCtx: ModulesContext): IModules;
}
