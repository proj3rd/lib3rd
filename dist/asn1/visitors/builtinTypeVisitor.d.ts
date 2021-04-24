import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { BuiltinType } from '../classes/asnType';
import { BuiltinTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * builtinType:
 *   octetStringType
 * | bitStringType
 * | characterStringType
 * | choiceType
 * | enumeratedType
 * | integerType
 * | sequenceType
 * | sequenceOfType
 * | setType
 * | setOfType
 * | objectidentifiertype
 * | objectClassFieldType
 * | BOOLEAN_LITERAL
 * | NULL_LITERAL
 * ```
 */
export declare class BuiltinTypeVisitor extends AbstractParseTreeVisitor<BuiltinType> implements grammar3rdVisitor<BuiltinType> {
    visitChildren(ctx: BuiltinTypeContext): BuiltinType;
    protected defaultResult(): BuiltinType;
}
//# sourceMappingURL=builtinTypeVisitor.d.ts.map