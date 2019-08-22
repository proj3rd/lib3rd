import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ReferencedTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { DefinedType } from '../classes/definedType';
/**
 * ANTLR4 grammar
 * ```
 * referencedType :
 *   definedType
 * ```
 */
export declare class ReferencedTypeVisitor extends AbstractParseTreeVisitor<DefinedType> implements ASN_3gppVisitor<DefinedType> {
    defaultResult(): DefinedType;
    visitChildren(referencedTypeCtx: ReferencedTypeContext): DefinedType;
}
