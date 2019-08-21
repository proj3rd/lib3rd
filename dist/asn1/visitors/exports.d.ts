import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
/**
 * exports :   (EXPORTS_LITERAL symbolsExported SEMI_COLON
 *  |    EXPORTS_LITERAL ALL_LITERAL SEMI_COLON )?
 */
export declare class ExportsVisitor extends AbstractParseTreeVisitor<string[]> implements ASN_3gppVisitor<string[]> {
    defaultResult(): string[];
    visitChildren(exportsCtx: any): string[];
}
