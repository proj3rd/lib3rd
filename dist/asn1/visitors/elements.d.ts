import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ElementsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { SingleValue } from '../classes/singleValue';
import { SizeConstraint } from '../classes/sizeConstraint';
import { ValueRange } from '../classes/valueRange';
export declare type ElementsTypes = SizeConstraint | SingleValue | ValueRange;
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
export declare class ElementsVisitor extends AbstractParseTreeVisitor<ElementsTypes> implements ASN_3gppVisitor<ElementsTypes> {
    defaultResult(): ElementsTypes;
    visitChildren(elementsCtx: ElementsContext): ElementsTypes;
}
