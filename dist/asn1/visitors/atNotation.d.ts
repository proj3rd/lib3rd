import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AtNotationContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
/**
 * ANTLR4 grammar
 * ```
 * atNotation :  (A_ROND | (A_ROND_DOT level)) componentIdList
 * componentIdList : IDENTIFIER (DOT IDENTIFIER)*  //?????
 * ```
 */
export declare class AtNotationVisitor extends AbstractParseTreeVisitor<string> implements ASN_3gppVisitor<string> {
    defaultResult(): string;
    visitChildren(atNotationCtx: AtNotationContext): string;
}
