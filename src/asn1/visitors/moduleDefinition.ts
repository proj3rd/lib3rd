export interface IModuleDefinition {
  moduleName: string;
  definition: any /* TODO */;
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
 *         ;
 * ```
 */
export class ModuleDefinitionVisitor {
  public visitChildren(moduleDefinitionCtx: any): IModuleDefinition {
    const moduleName = moduleDefinitionCtx.children[0].getText();
    const definition = {};
    // TODO
    return {moduleName, definition};
  }
}
