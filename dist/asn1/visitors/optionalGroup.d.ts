import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { OptionalGroupContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { Syntax } from '../classes/syntax';
/**
 * ANTLR4 grammar
 * ```
 * optionalGroup : L_BRACKET (tokenOrGroupSpec)+ R_BRACKET
 * ```
 */
export declare class OptionalGroupVisitor extends AbstractParseTreeVisitor<Syntax> implements ASN_3gppVisitor<Syntax> {
    defaultResult(): Syntax;
    visitChildren(optionalGroupCtx: OptionalGroupContext): Syntax;
}
