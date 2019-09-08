import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ObjectClassAssignmentContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

export class ObjectClassAssignmentVisitor extends AbstractParseTreeVisitor<any /* TODO */>
                                          implements ASN_3gppVisitor<any /* TODO */> {
  public defaultResult(): any /* TODO */ {
    return undefined;
  }

  public visitChildren(objectClassAssignmentCtx: ObjectClassAssignmentContext): any /* TODO */ {
    // TODO
  }
}
