import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Syntax } from '../classes/syntax';
import { TokenOrGroupSpecContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { _RequiredToken } from './requiredTokenVisitor';
/**
 * # Grammar
 * ```
 * tokenOrGroupSpec: requiredToken | optionalGroup
 * ```
 */
export declare class TokenOrGroupSpecVisitor extends AbstractParseTreeVisitor<_TokenOrSyntax> implements ASN_3gppVisitor<_TokenOrSyntax> {
    visitChildren(ctx: TokenOrGroupSpecContext): _TokenOrSyntax;
    protected defaultResult(): _TokenOrSyntax;
}
export declare type _TokenOrSyntax = _RequiredToken | Syntax;
//# sourceMappingURL=tokenOrGroupSepcVisitor.d.ts.map