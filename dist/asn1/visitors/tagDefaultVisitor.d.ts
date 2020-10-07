import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TagDefault } from '../classes/moduleDefinition';
import { TagDefaultContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
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