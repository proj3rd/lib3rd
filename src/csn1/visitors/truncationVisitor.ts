import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import { Truncation } from '../classes/truncation';
import { TruncationContext } from '../grammar/csn3rdParser';
import { csn3rdVisitor } from '../grammar/csn3rdVisitor';

/**
 * # Grammar
 * ```
 * truncation: '//';
 * ```
 */
export class TruncationVisitor extends AbstractParseTreeVisitor<Truncation> implements csn3rdVisitor<Truncation> {
  public visitChildren(ctx: TruncationContext): Truncation {
    return Truncation.getInstance();
  }

  protected defaultResult(): Truncation {
    return unimpl();
  }
}
