import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectClassDefinition } from '../classes/objectClass';
import { ObjectClassDefnContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * objectClassDefn: CLASS_LITERAL L_BRACE fieldSpec (COMMA fieldSpec)* R_BRACE withSyntaxSpec?
 * ```
 */
export declare class ObjectClassDefnVisitor extends AbstractParseTreeVisitor<ObjectClassDefinition> implements ASN_3gppVisitor<ObjectClassDefinition> {
    visitChildren(ctx: ObjectClassDefnContext): ObjectClassDefinition;
    protected defaultResult(): ObjectClassDefinition;
}
//# sourceMappingURL=objectClassDefnVisitor.d.ts.map