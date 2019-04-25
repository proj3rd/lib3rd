/**
 * exports :   (EXPORTS_LITERAL symbolsExported SEMI_COLON
 *  |    EXPORTS_LITERAL ALL_LITERAL SEMI_COLON )?
 */
export declare class ExportsVisitor {
    visitChildren(exportsCtx: any): string[];
}
