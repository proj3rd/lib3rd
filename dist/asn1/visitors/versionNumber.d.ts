import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { VersionNumberContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
/**
 * ANTLR4 grammar
 * ```
 * versionNumber  :  (NUMBER  COLON )?
 * ```
 */
export declare class VersionNumberVisitor extends AbstractParseTreeVisitor<any> implements ASN_3gppVisitor<any> {
    defaultResult(): any;
    visitChildren(versionNumberCtx: VersionNumberContext): any;
}
