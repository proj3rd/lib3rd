import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { FieldSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { FieldSpec } from '../classes/fieldSpec';
import { BuiltinValue } from './builtinValue';
export interface IOptionalitySpec {
    optional: boolean;
    default?: AsnType | BuiltinValue;
}
/**
 * ANTLR4 grammar
 * ```
 * fieldSpec :
 * AMPERSAND IDENTIFIER
 * (
 *   typeOptionalitySpec?
 *  	| asnType (valueSetOptionalitySpec?  | UNIQUE_LITERAL? valueOptionalitySpec? )
 * | fieldName (OPTIONAL_LITERAL | (DEFAULT_LITERAL (valueSet | value)))?
 * | definedObjectClass (OPTIONAL_LITERAL | (DEFAULT_LITERAL (objectSet | object)))?
 * )
 * ```
 */
export declare class FieldSpecVisitor extends AbstractParseTreeVisitor<FieldSpec> implements ASN_3gppVisitor<FieldSpec> {
    defaultResult(): FieldSpec;
    visitChildren(fieldSpecCtx: FieldSpecContext): FieldSpec;
}
