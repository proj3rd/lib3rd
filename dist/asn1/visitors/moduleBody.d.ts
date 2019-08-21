import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ModuleBodyContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IAssignments, IConstants } from './assignmentList';
import { ISymbolsFromModule } from './symbolsFromModuleList';
export interface IModuleBody {
    exports: string[];
    imports: ISymbolsFromModule;
    assignments: IAssignments;
    constants: IConstants;
}
/**
 * ANTLR4 grammar
 * ```
 * moduleBody :  (exports imports assignmentList) ?
 * ```
 */
export declare class ModuleBodyVisitor extends AbstractParseTreeVisitor<IModuleBody> implements ASN_3gppVisitor<IModuleBody> {
    defaultResult(): IModuleBody;
    visitChildren(moduleBodyCtx: ModuleBodyContext): IModuleBody;
}
