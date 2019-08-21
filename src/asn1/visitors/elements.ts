import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { ElementsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { BuiltinValue } from './builtinValue';
import { SizeConstraintVisitor } from './sizeConstraint';
import { ValueVisitor } from './value';

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
export class ElementsVisitor extends AbstractParseTreeVisitor<IConstraint> implements ASN_3gppVisitor<IConstraint> {
  public defaultResult(): IConstraint {
    return undefined;
  }

  public visitChildren(elementsCtx: ElementsContext): IConstraint {
    const subtypeElementsCtx = elementsCtx.children[0];
    const childCount = subtypeElementsCtx.childCount;
    const childCtxFirst = subtypeElementsCtx.getChild(0);
    const childCtxLast = subtypeElementsCtx.getChild(childCount - 1);
    let elements: IConstraint;
    switch (subtypeElementsCtx.childCount) {
      case 1: {
        // sizeConstraint
        // value
        switch (getContextName(childCtxFirst)) {
          case 'sizeConstraint': {
            const sizeConstraintCtx = childCtxFirst;
            elements = sizeConstraintCtx.accept(new SizeConstraintVisitor());
            break;
          }
          case 'value': {
            const valueCtx = childCtxFirst;
            elements = {value: valueCtx.accept(new ValueVisitor())};
            break;
          }
          default: {
            log.warn(getLogWithAsn1(elementsCtx, 'Not supported ASN1:'));
            break;
          }
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
        const min = getContextName(minCtx) === 'value' ? minCtx.accept(new ValueVisitor()) : minCtx.text;
        const maxCtx = childCtxLast;
        const max = getContextName(maxCtx) === 'value' ? maxCtx.accept(new ValueVisitor()) : maxCtx.text;
        elements = {min, max};
        break;
      }
    }
    return elements;
  }
}
