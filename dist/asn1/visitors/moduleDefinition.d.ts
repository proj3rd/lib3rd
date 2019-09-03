import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ModuleDefinitionContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IModuleBody } from './moduleBody';
interface IDefinitiveObjIdComponent {
    definitiveName: string;
    definitiveNumber: number;
}
export interface IModuleDefinition {
    moduleName: string;
    definition: IModuleBody;
    definitiveIdentification: IDefinitiveObjIdComponent[];
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
export declare class ModuleDefinitionVisitor extends AbstractParseTreeVisitor<IModuleDefinition> implements ASN_3gppVisitor<IModuleDefinition> {
    defaultResult(): IModuleDefinition;
    visitChildren(moduleDefinitionCtx: ModuleDefinitionContext): IModuleDefinition;
}
export {};
