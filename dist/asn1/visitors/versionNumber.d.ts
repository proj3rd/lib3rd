import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { VersionNumberContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
/**
 * ANTLR4 grammar
 * ```
 * versionNumber  :  (NUMBER  COLON )?
 * ```
 */
export declare class VersionNumberVisitor extends AbstractParseTreeVisitor<null> implements ASN_3gppVisitor<null> {
    defaultResult(): null;
    visitChildren(versionNumberCtx: VersionNumberContext): null;
}
