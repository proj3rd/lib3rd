/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ObjectSet } from '../classes/objectSet';
import { ObjectSetContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ObjectSetSpecVisitor } from './objectSetSpecVisitor';

/**
 * # Grammar
 * ```
 * objectSet: L_BRACE objectSetSpec R_BRACE
 * ```
 */
export class ObjectSetVisitor extends AbstractParseTreeVisitor<ObjectSet>
  implements grammar3rdVisitor<ObjectSet> {
  public visitChildren(ctx: ObjectSetContext): ObjectSet {
    const objectSetSpecCtx = ctx.objectSetSpec();
    const objectSetSpec = objectSetSpecCtx.accept(new ObjectSetSpecVisitor());
    return new ObjectSet(objectSetSpec);
  }

  protected defaultResult(): ObjectSet {
    return unimpl();
  }
}
