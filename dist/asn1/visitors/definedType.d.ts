import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { DefinedTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { DefinedType } from '../classes/definedType';
/**
 * ANTLR4 grammar
 * ```
 * definedType :
 * IDENTIFIER (DOT IDENTIFIER)? actualParameterList?
 * ```
 */
export declare class DefinedTypeVisitor extends AbstractParseTreeVisitor<DefinedType> implements ASN_3gppVisitor<DefinedType> {
    defaultResult(): DefinedType;
    visitChildren(definedTypeCtx: DefinedTypeContext): DefinedType;
}
