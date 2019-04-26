import { log } from '../../utils/logging';
import { getContextName } from '../utils';

/**
 * ANTLR4 grammar
 * ```
 * valueAssignment :
 *       asnType
 * 	   ASSIGN_OP
 *        value
 * value  :   builtinValue
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
export class ValueAssignmentVisitor {
  public visitChildren(valueAssignmentCtx: any): any /* TODO */ {
    const valueCtx = valueAssignmentCtx.children[2];
    const builtinValueCtx = valueCtx.children[0];
    const subContext = builtinValueCtx.children[0];
    const contextName = getContextName(subContext);
    if (!contextName) {
      // Corresponds to CSTRING or BSTRING
      return subContext.getText();
    }
    switch (contextName) {
      case 'booleanValue': {
        return subContext.getText().toLowerCase() === 'true';
      }
      case 'integerValue': {
        return Number(subContext.getText());
      }
      case 'enumeratedValue': {
        log.warn('ASN.1 BuiltinValue contains EnumeratedValue defined in X.680.' +
          'This will not be treated in the current version');
        // TODO
        // break;
      }
      case 'choiceValue': {
        log.warn('ASN.1 BuiltinValue contains ChoiceValue defined in X.680.' +
          'This will not be treated in the current version');
        // TODO
        // break;
      }
      case 'objectIdentifierValue': {
        log.warn('ASN.1 BuiltinValue contains ObjectIdentifierValue defined in X.680.' +
          'This will not be treated in the current version');
        // TODO
        // break;
      }
      default: {
        log.warn('ASN.1 BuiltinValue contains not supported context. This will not be treated in the current version');
      }
    }
  }
}
