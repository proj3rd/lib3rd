import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Syntax } from '../classes/syntax';
import { TokenOrGroupSpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { _RequiredToken } from './requiredTokenVisitor';
export declare type _TokenOrSyntax = _RequiredToken | Syntax;
/**
 * # Grammar
 * ```
 * tokenOrGroupSpec: requiredToken | optionalGroup
 * ```
 */
export declare class TokenOrGroupSpecVisitor extends AbstractParseTreeVisitor<_TokenOrSyntax> implements grammar3rdVisitor<_TokenOrSyntax> {
    visitChildren(ctx: TokenOrGroupSpecContext): _TokenOrSyntax;
    protected defaultResult(): _TokenOrSyntax;
}
//# sourceMappingURL=tokenOrGroupSepcVisitor.d.ts.map