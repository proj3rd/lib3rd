import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { DefinedObjectClassContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
export interface IDefinedObjectClass {
    moduleReference: string;
    objectClassReference: string;
}
/**
 * ANTLR4 grammar
 * ```
 *  definedObjectClass :
 *    (IDENTIFIER DOT)? IDENTIFIER
 *    | TYPE_IDENTIFIER_LITERAL
 *    |  ABSTRACT_SYNTAX_LITERAL
 * ```
 */
export declare class DefinedObjectClassVisitor extends AbstractParseTreeVisitor<IDefinedObjectClass> implements ASN_3gppVisitor<IDefinedObjectClass> {
    defaultResult(): IDefinedObjectClass;
    visitChildren(definedObjectClassCtx: DefinedObjectClassContext): IDefinedObjectClass;
}
