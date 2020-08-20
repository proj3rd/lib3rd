import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { PrimitiveFieldName } from '../classes/primitiveFieldName';
import { RequiredTokenContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * requiredToken: literal | primitiveFieldName
 * ```
 */
export declare class RequiredTokenVisitor extends AbstractParseTreeVisitor<_RequiredToken> implements ASN_3gppVisitor<_RequiredToken> {
    visitChildren(ctx: RequiredTokenContext): _RequiredToken;
    protected defaultResult(): _RequiredToken;
}
export declare type _RequiredToken = string | PrimitiveFieldName;
//# sourceMappingURL=requiredTokenVisitor.d.ts.map