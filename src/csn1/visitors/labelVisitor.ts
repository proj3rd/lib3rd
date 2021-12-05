import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import { Label } from '../classes/label';
import { Reference } from '../classes/reference';
import { LabelContext } from '../grammar/csn3rdParser';
import { csn3rdVisitor } from '../grammar/csn3rdVisitor';
import { ConcatenationVisitor } from './concatenationVisitor';
import { ExponentVisitor } from './exponentVisitor';
import { SendConstructionVisitor } from './sendConstructionVisitor';
import { SubclassingVisitor } from './subclassingVisitor copy';

/**
 * # Grammar
 * ```
 * label:
  '<' IDENTIFIER ':'
  (
    (IDENTIFIER | '<' IDENTIFIER '>') exponent? subclassing? send_construction?
    | concatenation
  )
  '>';
 * ```
 */
export class LabelVisitor extends AbstractParseTreeVisitor<Label> implements csn3rdVisitor<Label> {
  public visitChildren(ctx: LabelContext): Label {
    const name = ctx.getChild(1).text;
    const concatenationCtx = ctx.concatenation();
    if (concatenationCtx) {
      const concatenation = concatenationCtx.accept(new ConcatenationVisitor());
      return new Label(name, concatenation);
    } else {
      const test = ctx.getChild(3).text;
      const reference = test !== '<' ? test : new Reference(ctx.getChild(4).text);
      const exponentCtx = ctx.exponent();
      const subclassingCtx = ctx.subclassing();
      const sendConstructionCtx = ctx.send_construction();
      const exponent = exponentCtx?.accept(new ExponentVisitor());
      const subclassing = subclassingCtx?.accept(new SubclassingVisitor());
      const sendConstruction = sendConstructionCtx?.accept(new SendConstructionVisitor());
      return new Label(name, reference, { exponent, subclassing, sendConstruction });
    }
  }

  protected defaultResult(): Label {
    return unimpl();
  }
}
