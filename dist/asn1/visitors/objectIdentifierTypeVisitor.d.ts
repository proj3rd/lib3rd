import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectIdentifierType } from '../classes/objectIdentifierType';
import { ObjectIdentifierTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * ObjectIdentifierTypeVisitor: OBJECT_LITERAL IDENTIFIER_LITERAL
 * ```
 */
export declare class ObjectIdentifierTypeVisitor extends AbstractParseTreeVisitor<ObjectIdentifierType> implements grammar3rdVisitor<ObjectIdentifierType> {
    visitChildren(ctx: ObjectIdentifierTypeContext): ObjectIdentifierType;
    protected defaultResult(): ObjectIdentifierType;
}
//# sourceMappingURL=objectIdentifierTypeVisitor.d.ts.map