import { getContextName, warnNotSupportedAsn1 } from '../utils';

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
        // TODO
        // break;
      }
      case 'choiceValue': {
        // TODO
        // break;
      }
      case 'objectIdentifierValue': {
        // TODO
        // break;
      }
      default: {
        warnNotSupportedAsn1(builtinValueCtx);
      }
    }
  }
}
