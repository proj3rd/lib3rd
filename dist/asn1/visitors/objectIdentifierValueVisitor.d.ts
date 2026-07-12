import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectIdentifierValue } from '../classes/objectIdentifierValue';
import { ObjectIdentifierValueContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * objectIdentifierValue: L_BRACE objIdComponentsList R_BRACE
 * ```
 */
export declare class ObjectIdentifierValueVisitor extends AbstractParseTreeVisitor<ObjectIdentifierValue> implements grammar3rdVisitor<ObjectIdentifierValue> {
    visitChildren(ctx: ObjectIdentifierValueContext): ObjectIdentifierValue;
    protected defaultResult(): ObjectIdentifierValue;
}
//# sourceMappingURL=objectIdentifierValueVisitor.d.ts.map