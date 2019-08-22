import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { EnumerationItemContext, NamedNumberContext, ValueContext } from '../ASN_3gppParser';
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
    if (childCtx instanceof TerminalNode) {
      enumerationItem = childCtx.text;
    } else if (childCtx instanceof NamedNumberContext) {
      log.warn(getLogWithAsn1(enumerationItemCtx, 'NamedNumber not supported:'));
    } else if (childCtx instanceof ValueContext) {
      enumerationItem = childCtx.accept(new ValueVisitor());
    } else {
      log.warn(getLogWithAsn1(enumerationItemCtx, 'Not supported ASN1:'));
    }
    return enumerationItem;
  }
}
