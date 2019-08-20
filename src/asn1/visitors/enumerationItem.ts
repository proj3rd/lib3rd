import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { EnumerationItemContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { BuiltinValue } from './builtinValue';
import { ValueVisitor } from './value';

export type EnumerationItem = BuiltinValue;

/**
 * ANTLR4 grammar
 * ```
 * enumerationItem : IDENTIFIER | namedNumber | value
 * ```
 */
export class EnumerationItemVisitor extends AbstractParseTreeVisitor<EnumerationItem>
                                    implements ASN_3gppVisitor<EnumerationItem> {
  public defaultResult(): EnumerationItem {
    return undefined;
  }

  public visitChildren(enumerationItemCtx: EnumerationItemContext): EnumerationItem {
    const childCtx = enumerationItemCtx.children[0];
    let enumerationItem: EnumerationItem;
    switch (getContextName(childCtx)) {
      case null: {
        enumerationItem = childCtx.text;
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
