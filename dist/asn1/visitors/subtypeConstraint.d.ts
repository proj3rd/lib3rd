import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SubtypeConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ElementSetSpecs } from './elementSetSpecs';
/**
 * ANTLR4 grammar
 * ```
 * subtypeConstraint	:
 * elementSetSpecs
 * ```
 */
export declare class SubtypeConstraintVisitor extends AbstractParseTreeVisitor<ElementSetSpecs> implements ASN_3gppVisitor<ElementSetSpecs> {
    defaultResult(): ElementSetSpecs;
    visitChildren(subtypeConstraintCtx: SubtypeConstraintContext): ElementSetSpecs;
}
