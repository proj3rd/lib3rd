import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ValueOptionalitySpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IOptionalitySpec } from './fieldSpec';
/**
 * ANTLR4 grammar
 * ```
 * valueOptionalitySpec : OPTIONAL_LITERAL | (DEFAULT_LITERAL value)
 * ```
 */
export declare class ValueOptionalitySpecVisitor extends AbstractParseTreeVisitor<IOptionalitySpec> implements ASN_3gppVisitor<IOptionalitySpec> {
    defaultResult(): IOptionalitySpec;
    visitChildren(valueOptionalitySpecCtx: ValueOptionalitySpecContext): IOptionalitySpec;
}
