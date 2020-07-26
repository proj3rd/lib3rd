import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ObjectSet } from '../classes/objectSet';
import { ObjectSetContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ObjectSetSpecVisitor } from './objectSetSpecVisitor';

/**
 * # Grammar
 * ```
 * objectSet: L_BRACE objectSetSpec R_BRACE
 * ```
 */
export class ObjectSetVisitor extends AbstractParseTreeVisitor<ObjectSet>
  implements ASN_3gppVisitor<ObjectSet> {
  public visitChildren(ctx: ObjectSetContext): ObjectSet {
    const objectSetSpecCtx = ctx.objectSetSpec();
    const objectSetSpec = objectSetSpecCtx.accept(new ObjectSetSpecVisitor());
    return new ObjectSet(objectSetSpec);
  }

  protected defaultResult(): ObjectSet {
    return unimpl();
  }
}
