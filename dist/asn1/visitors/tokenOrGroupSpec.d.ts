import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TokenOrGroupSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { Syntax } from '../classes/syntax';
/**
 * ANTLR4 grammar
 * ```
 * tokenOrGroupSpec : requiredToken | optionalGroup
 * ```
 */
export declare class TokenOrGroupSpecVisitor extends AbstractParseTreeVisitor<string | Syntax> implements ASN_3gppVisitor<string | Syntax> {
    defaultResult(): string | Syntax;
    visitChildren(tokenOrGroupSpecCtx: TokenOrGroupSpecContext): string | Syntax;
}
