import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AtNotation } from '../classes/atNotation';
import { AtNotationContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * atNotation: (A_ROND | (A_ROND_DOT level)) componentIdList
 * ```
 */
export declare class AtNotationVisitor extends AbstractParseTreeVisitor<AtNotation> implements grammar3rdVisitor<AtNotation> {
    visitChildren(ctx: AtNotationContext): AtNotation;
    protected defaultResult(): AtNotation;
}
//# sourceMappingURL=atNotationVisitor.d.ts.map