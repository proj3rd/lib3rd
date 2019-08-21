import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ElementsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { BuiltinValue } from './builtinValue';
export interface IConstraint {
    min?: BuiltinValue;
    max?: BuiltinValue;
    value?: BuiltinValue;
}
/**
 * ANTLR4 grammar
 * ```
 * elements  : subtypeElements
 * subtypeElements :
 *   ((value | MIN_LITERAL) LESS_THAN?  DOUBLE_DOT LESS_THAN?  (value | MAX_LITERAL) )
 *   |sizeConstraint
 *  | (PATTERN_LITERAL value)
 *  | value
 * ```
 */
export declare class ElementsVisitor extends AbstractParseTreeVisitor<IConstraint> implements ASN_3gppVisitor<IConstraint> {
    defaultResult(): IConstraint;
    visitChildren(elementsCtx: ElementsContext): IConstraint;
}
