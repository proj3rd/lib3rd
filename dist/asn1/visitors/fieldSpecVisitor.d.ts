import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { FieldSpec } from '../classes/objectClass';
import { FieldSpecContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * fieldSpec: AMPERSAND IDENTIFIER (
 *     typeOptionalitySpec?
 *   | asnType (valueSetOptionalitySpec? | UNIQUE_LITERAL? valueOptionalitySpec?)
 *   | fieldName (OPTIONAL_LITERAL | (DEFAULT_LITERAL (valueSet | value)))?
 *   | definedObjectClass (OPTIONAL_LITERAL | (DEFAULT_LITERAL (objectSet | object)))?
 * )
 * ```
 */
export declare class FieldSpecVisitor extends AbstractParseTreeVisitor<FieldSpec> implements ASN_3gppVisitor<FieldSpec> {
    visitChildren(ctx: FieldSpecContext): FieldSpec;
    protected defaultResult(): FieldSpec;
}
//# sourceMappingURL=fieldSpecVisitor.d.ts.map