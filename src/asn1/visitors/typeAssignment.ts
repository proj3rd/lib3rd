import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { TypeAssignmentContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { AsnTypeVisitor } from './asnType';

/**
 * ANTLR4 grammar
 * ```
 * typeAssignment :
 *       ASSIGN_OP
 *       asnType
 * ```
 */
export class TypeAssignmentVisitor extends AbstractParseTreeVisitor<AsnType> implements ASN_3gppVisitor<AsnType> {
  public defaultResult(): AsnType {
    return undefined;
  }

  public visitChildren(typeAssignmentCtx: TypeAssignmentContext): AsnType {
    return typeAssignmentCtx.children[1].accept(new AsnTypeVisitor());
  }
}
