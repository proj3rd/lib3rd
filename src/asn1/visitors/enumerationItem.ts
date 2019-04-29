import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { ValueVisitor } from './value';

/**
 * ANTLR4 grammar
 * ```
 * enumerationItem : IDENTIFIER | namedNumber | value
 * ```
 */
export class EnumerationItemVisitor {
  public visitChildren(enumerationItemCtx: any): any /* TODO */ {
    const childCtx = enumerationItemCtx.children[0];
    let enumerationItem = null;
    switch (getContextName(childCtx)) {
      case null: {
        enumerationItem = childCtx.getText();
        break;
      }
      case 'namedNumber': {
        log.warn(getLogWithAsn1(enumerationItemCtx, 'NamedNumber not supported:'));
        break;
      }
      case 'value': {
        enumerationItem = childCtx.accept(new ValueVisitor());
        break;
      }
      default: {
        log.warn(getLogWithAsn1(enumerationItemCtx, 'Not supported ASN1:'));
      }
    }
    return enumerationItem;
  }
}
