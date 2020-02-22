import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TypeOptionalitySpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
interface ITypeOptionalitySpec {
    optional: boolean;
    default?: AsnType;
}
/**
 * ANTLR4 grammar
 * ```
 * typeOptionalitySpec : OPTIONAL_LITERAL | (DEFAULT_LITERAL asnType)
 * ```
 */
export declare class TypeOptionalitySpecVisitor extends AbstractParseTreeVisitor<ITypeOptionalitySpec> implements ASN_3gppVisitor<ITypeOptionalitySpec> {
    defaultResult(): ITypeOptionalitySpec;
    visitChildren(typeOptionalitySpecCtx: TypeOptionalitySpecContext): ITypeOptionalitySpec;
}
export {};
