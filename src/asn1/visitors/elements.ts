import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { ValueVisitor } from './value';

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
export class ElementsVisitor {
  public visitChildren(elementsCtx: any): any /* TODO */ {
    const subtypeElementsCtx = elementsCtx.children[0];
    const childCtxes = subtypeElementsCtx.children;
    let elements = null;
    switch (childCtxes.length) {
      case 1: {
        // sizeConstraint
        // value
        switch (getContextName(childCtxes[0])) {
          case 'sizeConstraint': {
            log.warn(getLogWithAsn1(elementsCtx, 'SizeConstraint not supported:'));
            break;
          }
          case 'value': {
            const valueCtx = childCtxes[0];
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
        if (childCtxes.length > 3) {
          log.warn(getLogWithAsn1(elementsCtx, '\'<\' or \'>\' not supported:'));
        }
        const minCtx = childCtxes[0];
        const min = getContextName(minCtx) === 'value' ? minCtx.accept(new ValueVisitor()) : minCtx.getText();
        const maxCtx = childCtxes[childCtxes.length - 1];
        const max = getContextName(maxCtx) === 'value' ? maxCtx.accept(new ValueVisitor()) : maxCtx.getText();
        elements = {min, max};
        break;
      }
    }
    return elements;
  }
}
