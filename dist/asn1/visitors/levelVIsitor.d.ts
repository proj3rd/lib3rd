import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { LevelContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * level: (DOT level)?
 * ```
 */
export declare class LevelVisitor extends AbstractParseTreeVisitor<number> implements grammar3rdVisitor<number> {
    visitChildren(ctx: LevelContext): number;
    protected defaultResult(): number;
}
//# sourceMappingURL=levelVIsitor.d.ts.map