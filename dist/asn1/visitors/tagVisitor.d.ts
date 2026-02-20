import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Tag } from '../classes/sequenceType';
import { TagContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
export declare const RE_COND: RegExp;
export declare const RE_NEED: RegExp;
/**
 * # Grammar
 * ```
 * tag: TAG
 * TAG: '--' ~('\n'|'\r')*
 * ```
 */
export declare class TagVisitor extends AbstractParseTreeVisitor<Tag> implements grammar3rdVisitor<Tag> {
    visitChildren(ctx: TagContext): Tag;
    protected defaultResult(): Tag;
}
//# sourceMappingURL=tagVisitor.d.ts.map