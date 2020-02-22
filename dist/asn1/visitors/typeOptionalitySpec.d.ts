import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TypeOptionalitySpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IOptionalitySpec } from './fieldSpec';
/**
 * ANTLR4 grammar
 * ```
 * typeOptionalitySpec : OPTIONAL_LITERAL | (DEFAULT_LITERAL asnType)
 * ```
 */
export declare class TypeOptionalitySpecVisitor extends AbstractParseTreeVisitor<IOptionalitySpec> implements ASN_3gppVisitor<IOptionalitySpec> {
    defaultResult(): IOptionalitySpec;
    visitChildren(typeOptionalitySpecCtx: TypeOptionalitySpecContext): IOptionalitySpec;
}
