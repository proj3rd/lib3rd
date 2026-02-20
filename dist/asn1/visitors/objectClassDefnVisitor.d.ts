import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectClassDefinition } from '../classes/objectClass';
import { ObjectClassDefnContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * objectClassDefn: CLASS_LITERAL L_BRACE fieldSpec (COMMA fieldSpec)* R_BRACE withSyntaxSpec?
 * ```
 */
export declare class ObjectClassDefnVisitor extends AbstractParseTreeVisitor<ObjectClassDefinition> implements grammar3rdVisitor<ObjectClassDefinition> {
    visitChildren(ctx: ObjectClassDefnContext): ObjectClassDefinition;
    protected defaultResult(): ObjectClassDefinition;
}
//# sourceMappingURL=objectClassDefnVisitor.d.ts.map