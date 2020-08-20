import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentIdListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * componentIdList: IDENTIFIER (DOT IDENTIFIER)*
 * ```
 */
export declare class ComponentIdListVisitor extends AbstractParseTreeVisitor<string[]> implements ASN_3gppVisitor<string[]> {
    visitChildren(ctx: ComponentIdListContext): string[];
    protected defaultResult(): string[];
}
//# sourceMappingURL=componentIdListVisitor.d.ts.map