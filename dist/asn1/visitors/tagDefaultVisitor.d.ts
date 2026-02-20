import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TagDefaultContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { TagDefault } from '../types/tagDefault';
/**
 * # Grammar
 * ```
 * tagDefault: ((EXPLICIT_LITERAL | IMPLICIT_LITERAL | AUTOMATIC_LITERAL) TAGS_LITERAL)?
 * ```
 */
export declare class TagDefaultVisitor extends AbstractParseTreeVisitor<TagDefault> implements grammar3rdVisitor<TagDefault> {
    visitChildren(ctx: TagDefaultContext): TagDefault;
    protected defaultResult(): TagDefault;
}
//# sourceMappingURL=tagDefaultVisitor.d.ts.map