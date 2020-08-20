import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { DefinedType } from '../classes/asnType';
import { DefinedTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * definedType: IDENTIFIER (DOT IDENTIFER)? actualParameterList?
 * ```
 */
export declare class DefinedTypeVisitor extends AbstractParseTreeVisitor<DefinedType> implements ASN_3gppVisitor<DefinedType> {
    visitChildren(ctx: DefinedTypeContext): DefinedType;
    protected defaultResult(): DefinedType;
}
//# sourceMappingURL=definedTypeVisitor.d.ts.map