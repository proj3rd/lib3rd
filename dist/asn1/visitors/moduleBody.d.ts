import { ISymbolsFromModule } from './symbolsFromModuleList';
export interface IModuleBody {
    exports: string[];
    imports: ISymbolsFromModule;
    assignments: any;
    constants: any;
}
/**
 * ANTLR4 grammar
 * ```
 * moduleBody :  (exports imports assignmentList) ?
 * ```
 */
export declare class ModuleBodyVisitor {
    visitChildren(moduleBodyCtx: any): IModuleBody;
}
