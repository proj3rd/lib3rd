import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TagDefault } from '../classes/moduleDefinition';
import { TagDefaultContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * tagDefault: ((EXPLICIT_LITERAL | IMPLICIT_LITERAL | AUTOMATIC_LITERAL) TAGS_LITERAL)?
 * ```
 */
export declare class TagDefaultVisitor extends AbstractParseTreeVisitor<TagDefault> implements ASN_3gppVisitor<TagDefault> {
    visitChildren(ctx: TagDefaultContext): TagDefault;
    protected defaultResult(): TagDefault;
}
//# sourceMappingURL=tagDefaultVisitor.d.ts.map