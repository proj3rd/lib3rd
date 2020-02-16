import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ElementsContext, SizeConstraintContext, ValueContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { SingleValue } from '../classes/singleValue';
import { SizeConstraint } from '../classes/sizeConstraint';
import { ValueRange } from '../classes/valueRange';
import { BuiltinValue } from './builtinValue';
import { SizeConstraintVisitor } from './sizeConstraint';
import { ValueVisitor } from './value';

export type ElementsTypes = SizeConstraint | SingleValue | ValueRange;

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
export class ElementsVisitor extends AbstractParseTreeVisitor<ElementsTypes>
       implements ASN_3gppVisitor<ElementsTypes> {
  public defaultResult(): ElementsTypes {
    return undefined;
  }

  public visitChildren(elementsCtx: ElementsContext): ElementsTypes {
    const subtypeElementsCtx = elementsCtx.children[0];
    const childCount = subtypeElementsCtx.childCount;
    const childCtxFirst = subtypeElementsCtx.getChild(0);
    const childCtxLast = subtypeElementsCtx.getChild(childCount - 1);
    let elements: ElementsTypes;
    switch (subtypeElementsCtx.childCount) {
      case 1: {
        // sizeConstraint
        // value
        if (childCtxFirst instanceof SizeConstraintContext) {
          const sizeConstraintCtx = childCtxFirst;
          elements = sizeConstraintCtx.accept(new SizeConstraintVisitor());
        } else if (childCtxFirst instanceof ValueContext) {
          const valueCtx = childCtxFirst;
          elements = new SingleValue(valueCtx.accept(new ValueVisitor()));
        } else {
          log.warn(getLogWithAsn1(elementsCtx, 'Not supported ASN1:'));
        }
        break;
      }
      case 2: {
        // (PATTERN_LITERAL value)
        log.warn(getLogWithAsn1(elementsCtx, 'PatternConstraint not supported:'));
        break;
      }
      default: {
        // ((value | MIN_LITERAL) LESS_THAN?  DOUBLE_DOT LESS_THAN?  (value | MAX_LITERAL) )
        /** NOTE: value is expected to be string (IDENTIFIER) or number (integer)
         */
        if (childCount > 3) {
          log.warn(getLogWithAsn1(elementsCtx, '\'<\' or \'>\' not supported:'));
        }
        const minCtx = childCtxFirst;
        const min = minCtx instanceof ValueContext ? minCtx.accept(new ValueVisitor()) : minCtx.text;
        const maxCtx = childCtxLast;
        const max = maxCtx instanceof ValueContext ? maxCtx.accept(new ValueVisitor()) : maxCtx.text;
        elements = new ValueRange({min, max});
        break;
      }
    }
    return elements;
  }
}
