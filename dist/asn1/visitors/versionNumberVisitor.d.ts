import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { VersionNumberContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * versionNumber: (NUMBER COLON)?
 * ```
 */
export declare class VersionNumberVisitor extends AbstractParseTreeVisitor<number | undefined> implements grammar3rdVisitor<number | undefined> {
    visitChildren(ctx: VersionNumberContext): number | undefined;
    protected defaultResult(): number | undefined;
}
//# sourceMappingURL=versionNumberVisitor.d.ts.map