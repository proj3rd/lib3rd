import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SubtypeConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ElementSetSpec } from './elementSetSpecs';
/**
 * ANTLR4 grammar
 * ```
 * subtypeConstraint	:
 * elementSetSpecs
 * ```
 */
export declare class SubtypeConstraintVisitor extends AbstractParseTreeVisitor<ElementSetSpec> implements ASN_3gppVisitor<ElementSetSpec> {
    defaultResult(): ElementSetSpec;
    visitChildren(subtypeConstraintCtx: SubtypeConstraintContext): ElementSetSpec;
}
