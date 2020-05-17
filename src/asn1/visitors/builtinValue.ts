import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { BooleanValueContext, BuiltinValueContext, ChoiceValueContext, EnumeratedValueContext,
         IntegerValueContext, ObjectIdentifierValueContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { ObjectIdentifierValue } from '../classes/objectIdentifierValue';
import { EnumeratedValueVisitor } from './enumeratedValue';
import { ObjectIdentifierValueVisitor } from './objectIdentifierValue';

export type BuiltinValue = string | boolean | number | ObjectIdentifierValue;

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
    let valueAssignment: BuiltinValue;
    if (subContext instanceof TerminalNode) {
      // Corresponds to CSTRING or BSTRING
      valueAssignment = subContext.text;
    }
    if (subContext instanceof BooleanValueContext) {
      valueAssignment = subContext.text.toLowerCase() === 'true';
    } else if (subContext instanceof IntegerValueContext) {
      const valueText = subContext.text;
      const valueNumeric = Number(valueText);
      valueAssignment = isNaN(valueNumeric) ? valueText : valueNumeric;
    } else if (subContext instanceof EnumeratedValueContext) {
      /** NOTE: Since enum and interger are defined as below:
       *   enumeratedValue  : IDENTIFIER
       *   integerValue :  signedNumber | IDENTIFIER
       * and enum precedes integer, integer may be incorrectly parsed as enum
       */
      valueAssignment = subContext.accept(new EnumeratedValueVisitor());
    } else if (subContext instanceof ChoiceValueContext) {
      log.warn(getLogWithAsn1(builtinValueCtx, 'ChoiceValue not supported:'));
      // TODO
    } else if (subContext instanceof ObjectIdentifierValueContext) {
      valueAssignment = subContext.accept(new ObjectIdentifierValueVisitor());
    } else if (subContext instanceof TerminalNode) {
      valueAssignment = subContext.text;
    } else {
      log.warn(getLogWithAsn1(builtinValueCtx, 'Not supported ASN1 in BuiltinValue:'));
    }
    return valueAssignment;
  }
}
