import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { PrimitiveFieldName } from '../classes/primitiveFieldName';
import { RequiredTokenContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
export declare type _RequiredToken = string | PrimitiveFieldName;
/**
 * # Grammar
 * ```
 * requiredToken: literal | primitiveFieldName
 * ```
 */
export declare class RequiredTokenVisitor extends AbstractParseTreeVisitor<_RequiredToken> implements grammar3rdVisitor<_RequiredToken> {
    visitChildren(ctx: RequiredTokenContext): _RequiredToken;
    protected defaultResult(): _RequiredToken;
}
//# sourceMappingURL=requiredTokenVisitor.d.ts.map