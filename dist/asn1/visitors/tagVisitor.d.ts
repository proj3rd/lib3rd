import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Tag } from '../classes/sequenceType';
import { TagContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * tag: TAG
 * TAG: '--' ~('\n'|'\r')*
 * ```
 */
export declare class TagVisitor extends AbstractParseTreeVisitor<Tag> implements ASN_3gppVisitor<Tag> {
    visitChildren(ctx: TagContext): Tag;
    protected defaultResult(): Tag;
}
//# sourceMappingURL=tagVisitor.d.ts.map