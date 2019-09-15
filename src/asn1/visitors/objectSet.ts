import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ObjectSetContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ObjectSetSpecVisitor } from './objectSetSpec';

/**
 * ANTLR4 grammar
 * ```
 * objectSet : L_BRACE objectSetSpec R_BRACE
 * ```
 */
export class ObjectSetVisitor extends AbstractParseTreeVisitor<any/* TODO */>
                              implements ASN_3gppVisitor<any/* TODO */> {
  public defaultResult(): any/* TODO */ {
    return undefined;
  }

  public visitChildren(objectSetCtx: ObjectSetContext): any/* TODO */ {
    return objectSetCtx.children[1].accept(new ObjectSetSpecVisitor());
  }
}
