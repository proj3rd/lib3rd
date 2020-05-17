import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { DefinedObjectClassContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { DefinedObjectClass } from '../classes/definedObjectClass';
/**
 * ANTLR4 grammar
 * ```
 *  definedObjectClass :
 *    (IDENTIFIER DOT)? IDENTIFIER
 *    | TYPE_IDENTIFIER_LITERAL
 *    |  ABSTRACT_SYNTAX_LITERAL
 * ```
 */
export declare class DefinedObjectClassVisitor extends AbstractParseTreeVisitor<DefinedObjectClass> implements ASN_3gppVisitor<DefinedObjectClass> {
    defaultResult(): DefinedObjectClass;
    visitChildren(definedObjectClassCtx: DefinedObjectClassContext): DefinedObjectClass;
}
