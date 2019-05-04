import { IModuleBody } from './moduleBody';
export interface IModuleDefinition {
    moduleName: string;
    definition: IModuleBody;
}
/**
 * ANTLR4 grammar
 * ```
 * moduleDefinition :  IDENTIFIER (L_BRACE (IDENTIFIER L_PARAN NUMBER R_PARAN)* R_BRACE)?
 *      DEFINITIONS_LITERAL
 *      tagDefault
 *      extensionDefault
 *      ASSIGN_OP
 *       BEGIN_LITERAL
 *      moduleBody
 *       END_LITERAL
 * ```
 */
export declare class ModuleDefinitionVisitor {
    visitChildren(moduleDefinitionCtx: any): IModuleDefinition;
}
