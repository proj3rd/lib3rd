/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Logger } from '../../logger';
import { Tag } from '../classes/sequenceType';
import { TagContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

const logger = Logger.getLogger('asn1.parser.tagVisitor');

const RE_COND = /--\s*?Cond\s+?.+?/;
const RE_NEED = /--\s*?Need\s+?.+?/;

/**
 * # Grammar
 * ```
 * tag: TAG
 * TAG: '--' ~('\n'|'\r')*
 * ```
 */
export class TagVisitor extends AbstractParseTreeVisitor<Tag>
  implements grammar3rdVisitor<Tag> {
  public visitChildren(ctx: TagContext): Tag {
    const tagText = ctx.text.replace(/\s+/, ' ');
    if (RE_COND.test(tagText) || RE_NEED.test(tagText)) {
      return tagText;
    }
    logger.warn(`Need to check if tag contains a human error:
${tagText}`);
    return '';
  }

  protected defaultResult(): Tag {
    return '';
  }
}
