import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { DefinedObjectClass } from '../classes/asnType';
import { DefinedObjectClassContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * definedObjectClass :
 *   (IDENTIFIER DOT)? IDENTIFIER
 *   | TYPE_IDENTIFIER_LITERAL
 *   |  ABSTRACT_SYNTAX_LITERAL
 * ```
 */
export declare class DefinedObjectClassVisitor extends AbstractParseTreeVisitor<DefinedObjectClass> implements grammar3rdVisitor<DefinedObjectClass> {
    visitChildren(ctx: DefinedObjectClassContext): DefinedObjectClass;
    protected defaultResult(): DefinedObjectClass;
}
//# sourceMappingURL=definedObjectClassVisitor.d.ts.map