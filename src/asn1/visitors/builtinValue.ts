import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { EnumeratedValueVisitor } from './enumeratedValue';

/**
 * ANTLR4 grammar
 * ```
 * builtinValue :
 *     enumeratedValue
 *   |	integerValue
 *   |	choiceValue
 *   |	objectIdentifierValue
 *   |	booleanValue
 *   |   CSTRING
 *   |   BSTRING
 * ```
 */
export class BuiltinValueVisitor {
  public visitChildren(builtinValueCtx: any): any /* TODO */ {
    const subContext = builtinValueCtx.children[0];
    const contextName = getContextName(subContext);
    let valueAssignment = null;
    if (!contextName) {
      // Corresponds to CSTRING or BSTRING
      valueAssignment = subContext.getText();
    }
    switch (contextName) {
      case 'booleanValue': {
        valueAssignment = subContext.getText().toLowerCase() === 'true';
        break;
      }
      case 'integerValue': {
        const valueText = subContext.getText();
        const valueNumeric = Number(valueText);
        valueAssignment = valueNumeric === valueText ? valueNumeric : valueText;
        break;
      }
      case 'enumeratedValue': {
        /** NOTE: Since enum and interger are defined as below:
         *   enumeratedValue  : IDENTIFIER
         *   integerValue :  signedNumber | IDENTIFIER
         * and enum precedes integer, integer may be incorrectly parsed as enum
         */
        valueAssignment = subContext.accept(new EnumeratedValueVisitor());
        break;
      }
      case 'choiceValue': {
        log.warn(getLogWithAsn1(builtinValueCtx, 'ChoiceValue not supported:'));
        // TODO
        break;
      }
      case 'objectIdentifierValue': {
        log.warn(getLogWithAsn1(builtinValueCtx, 'ObjectIdentifierValue not supported:'));
        // TODO
        break;
      }
      case null: {
        valueAssignment = subContext.getText();
        break;
      }
      default: {
        log.warn(getLogWithAsn1(builtinValueCtx, 'Not supported ASN1 in BuiltinValue:'));
        break;
      }
    }
    return valueAssignment;
  }
}
