import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { TagContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

const reTag = /^-- *?(Need|Cond) *?.+?$/;

/**
 * ANTLR4 grammar
 * ```
 * tag
 *   : TAG
 *   ;
 *
 * TAG
 *   | '--' ~('\n'|'\r')*
 *   ;
 * ```
 */
export class TagVisitor extends AbstractParseTreeVisitor<string> implements ASN_3gppVisitor<string> {
  public defaultResult(): string {
    return undefined;
  }

  public visitChildren(tagCtx: TagContext): string {
    const childCtx = tagCtx.children[0];
    // FIXME: ASN_3gpp.g4 not working properly
    // Temporary workaround
    const tag: string = childCtx.text;
    return tag.match(reTag) ? tag : null;
  }
}
