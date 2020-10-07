import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ModuleDefinition } from '../classes/moduleDefinition';
import { ModuleDefinitionContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
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
export declare class ModuleDefinitionVisitor extends AbstractParseTreeVisitor<ModuleDefinition> implements grammar3rdVisitor<ModuleDefinition> {
    visitChildren(ctx: ModuleDefinitionContext): ModuleDefinition;
    protected defaultResult(): ModuleDefinition;
}
//# sourceMappingURL=moduleDefinitionVisitor.d.ts.map