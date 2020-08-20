import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { BuiltinType } from '../classes/asnType';
import { BuiltinTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
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
export declare class BuiltinTypeVisitor extends AbstractParseTreeVisitor<BuiltinType> implements ASN_3gppVisitor<BuiltinType> {
    visitChildren(ctx: BuiltinTypeContext): BuiltinType;
    protected defaultResult(): BuiltinType;
}
//# sourceMappingURL=builtinTypeVisitor.d.ts.map