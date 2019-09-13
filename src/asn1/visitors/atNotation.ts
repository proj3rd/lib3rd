import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

import { log } from '../../utils/logging';

import { AtNotationContext, ComponentIdListContext, LevelContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { getLogWithAsn1 } from '../utils';

/**
 * ANTLR4 grammar
 * ```
 * atNotation :  (A_ROND | (A_ROND_DOT level)) componentIdList
 * componentIdList : IDENTIFIER (DOT IDENTIFIER)*  //?????
 * ```
 */
export class AtNotationVisitor extends AbstractParseTreeVisitor<string>
                                       implements ASN_3gppVisitor<string> {
  public defaultResult(): string {
    return undefined;
  }

  public visitChildren(atNotationCtx: AtNotationContext): string {
    let componentIdList: string;
    atNotationCtx.children.forEach((childCtx) => {
      if (childCtx instanceof LevelContext) {
        log.warn(new Error('Level not supported'));
      } else if (childCtx instanceof ComponentIdListContext) {
        componentIdList = childCtx.text;
      } else if (childCtx instanceof TerminalNode) {
        // Do nothing
      } else {
        log.warn(new Error(getLogWithAsn1(atNotationCtx, 'Not supported ASN.1:')).stack);
      }
    });
    return componentIdList;
  }
}
