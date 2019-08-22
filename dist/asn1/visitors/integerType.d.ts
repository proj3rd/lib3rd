import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { IntegerTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { Integer } from '../classes/integer';
/**
 * ANTLR4 grammar
 * ```
 * integerType:INTEGER_LITERAL  (L_BRACE namedNumberList R_BRACE)?
 * ```
 */
export declare class IntegerTypeVisitor extends AbstractParseTreeVisitor<Integer> implements ASN_3gppVisitor<Integer> {
    defaultResult(): Integer;
    visitChildren(integerTypeCtx: IntegerTypeContext): Integer;
}
