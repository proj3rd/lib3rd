import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ObjectSetContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ObjectSet } from '../classes/objectSet';
import { ObjectSetSpecVisitor } from './objectSetSpec';

/**
 * ANTLR4 grammar
 * ```
 * objectSet : L_BRACE objectSetSpec R_BRACE
 * ```
 */
export class ObjectSetVisitor extends AbstractParseTreeVisitor<ObjectSet>
                              implements ASN_3gppVisitor<ObjectSet> {
  public defaultResult(): ObjectSet {
    return undefined;
  }

  public visitChildren(objectSetCtx: ObjectSetContext): ObjectSet {
    return new ObjectSet(objectSetCtx.children[1].accept(new ObjectSetSpecVisitor()));
  }
}
