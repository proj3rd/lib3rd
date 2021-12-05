import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import { Reference } from '../classes/reference';
import { SendConstruction } from '../classes/sendConstruction';
import { Send_constructionContext } from '../grammar/csn3rdParser';
import { csn3rdVisitor } from '../grammar/csn3rdVisitor';

/**
 * # Grammar
 * ```
 * send_construction:
  '='
  (IDENTIFIER | '<' IDENTIFIER '>')
 * ```
 */
export class SendConstructionVisitor extends AbstractParseTreeVisitor<SendConstruction> implements csn3rdVisitor<SendConstruction> {
  public visitChildren(ctx: Send_constructionContext): SendConstruction {
    const len = ctx.childCount;
    const sendConstruction = len === 2 ? ctx.getChild(1).text : new Reference(ctx.getChild(3).text);
    return new SendConstruction(sendConstruction);
  }

  protected defaultResult(): SendConstruction {
    return unimpl();
  }
}
