import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { DefinedObjectClass } from '../classes/asnType';
import { DefinedObjectClassContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * definedObjectClass :
 *   (IDENTIFIER DOT)? IDENTIFIER
 *   | TYPE_IDENTIFIER_LITERAL
 *   |  ABSTRACT_SYNTAX_LITERAL
 * ```
 */
export declare class DefinedObjectClassVisitor extends AbstractParseTreeVisitor<DefinedObjectClass> implements ASN_3gppVisitor<DefinedObjectClass> {
    visitChildren(ctx: DefinedObjectClassContext): DefinedObjectClass;
    protected defaultResult(): DefinedObjectClass;
}
//# sourceMappingURL=definedObjectClassVisitor.d.ts.map