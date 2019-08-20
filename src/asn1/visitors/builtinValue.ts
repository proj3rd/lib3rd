import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { BuiltinValueContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { EnumeratedValueVisitor } from './enumeratedValue';

export type BuiltinValue = string | boolean | number;

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
export class BuiltinValueVisitor extends AbstractParseTreeVisitor<BuiltinValue>
                                 implements ASN_3gppVisitor<BuiltinValue> {
  public defaultResult(): BuiltinValue {
    return undefined;
  }

  public visitChildren(builtinValueCtx: BuiltinValueContext): BuiltinValue {
    const subContext = builtinValueCtx.children[0];
    const contextName = getContextName(subContext);
    let valueAssignment: BuiltinValue;
    if (!contextName) {
      // Corresponds to CSTRING or BSTRING
      valueAssignment = subContext.text;
    }
    switch (contextName) {
      case 'booleanValue': {
        valueAssignment = subContext.text.toLowerCase() === 'true';
        break;
      }
      case 'integerValue': {
        const valueText = subContext.text;
        const valueNumeric = Number(valueText);
        valueAssignment = isNaN(valueNumeric) ? valueText : valueNumeric;
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
        valueAssignment = subContext.text;
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
