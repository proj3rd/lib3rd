import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedNumberContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { INamedNumber } from '../types';
/**
 * # Grammar
 * ```
 * namedNumber: IDENTIFIER L_PARAN (signedNumber | definedValue) R_PARAN
 * ```
 */
export declare class NamedNumberVisitor extends AbstractParseTreeVisitor<INamedNumber> implements ASN_3gppVisitor<INamedNumber> {
    visitChildren(ctx: NamedNumberContext): INamedNumber;
    protected defaultResult(): INamedNumber;
}
//# sourceMappingURL=namedNumberVisitor.d.ts.map