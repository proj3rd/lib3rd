import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumeratedTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { Enumerated } from '../classes/enumerated';
/**
 * ANTLR4 grammar
 * ```
 * enumeratedType : ENUMERATED_LITERAL L_BRACE enumerations R_BRACE
 * ```
 */
export declare class EnumeratedTypeVisitor extends AbstractParseTreeVisitor<Enumerated> implements ASN_3gppVisitor<Enumerated> {
    defaultResult(): Enumerated;
    visitChildren(enumeratedTypeCtx: EnumeratedTypeContext): Enumerated;
}
