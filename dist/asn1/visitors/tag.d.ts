import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TagContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
/**
 * ANTLR4 grammar
 * ```
 * tag
 *   : TAG
 *   ;
 *
 * TAG
 *   | '--' ~('\n'|'\r')*
 *   ;
 * ```
 */
export declare class TagVisitor extends AbstractParseTreeVisitor<string> implements ASN_3gppVisitor<string> {
    defaultResult(): string;
    visitChildren(tagCtx: TagContext): string;
}
