import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { LevelContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * level: (DOT level)?
 * ```
 */
export declare class LevelVisitor extends AbstractParseTreeVisitor<number> implements ASN_3gppVisitor<number> {
    visitChildren(ctx: LevelContext): number;
    protected defaultResult(): number;
}
//# sourceMappingURL=levelVIsitor.d.ts.map