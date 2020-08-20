import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { VersionNumberContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * versionNumber: (NUMBER COLON)?
 * ```
 */
export declare class VersionNumberVisitor extends AbstractParseTreeVisitor<number | undefined> implements ASN_3gppVisitor<number | undefined> {
    visitChildren(ctx: VersionNumberContext): number | undefined;
    protected defaultResult(): number | undefined;
}
//# sourceMappingURL=versionNumberVisitor.d.ts.map