export interface IModuleBody {
    imports: any;
    exports: any;
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
