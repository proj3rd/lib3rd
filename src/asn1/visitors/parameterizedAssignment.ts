import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { AsnTypeContext, ParameterizedAssignmentContext, ParameterListContext,
        ValueContext, ValueSetContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { AsnTypeVisitor } from './asnType';
import { ParameterListVisitor } from './parameterList';

/**
 * ANTLR4 grammar
 * ```
 * parameterizedAssignment :
 *  parameterList
 * (ASSIGN_OP
 * 	(asnType
 * 		|	value
 * 		|	valueSet
 * 	)
 * )
 * |( definedObjectClass ASSIGN_OP
 * 	( object
 * 		|	objectClass
 * 		|	objectSet
 * 	)
 * )
 * ;
 * ```
 */
export class ParameterizedAssignmentVisitor extends AbstractParseTreeVisitor<AsnType>
                                            implements ASN_3gppVisitor<AsnType> {
  public defaultResult(): AsnType {
    return undefined;
  }

  public visitChildren(parameterizedAssignmentCtx: ParameterizedAssignmentContext): AsnType {
    let parameterList: string[];
    let asnType: AsnType;
    const childCtxes = parameterizedAssignmentCtx.children;
    childCtxes.every((childCtx) => {
      if (childCtx instanceof ParameterListContext) {
        parameterList = childCtx.accept(new ParameterListVisitor());
      } else if (childCtx instanceof AsnTypeContext) {
        asnType = childCtx.accept(new AsnTypeVisitor());
      } else if (childCtx instanceof ValueContext) {
        log.warn(getLogWithAsn1(parameterizedAssignmentCtx, 'ParameterizedValueAssignment not supported'));
      } else if (childCtx instanceof ValueSetContext) {
        log.warn(getLogWithAsn1(parameterizedAssignmentCtx, 'ParameterizedValueSetAssignment not supported'));
      } else if (childCtx instanceof TerminalNode) {
        // Do nothing
      } else {
        log.warn(getLogWithAsn1(parameterizedAssignmentCtx, 'Not supported ASN.1'));
      }
      return true;
    });
    if (asnType) {
      asnType.parameterList = parameterList;
    }
    return asnType;
  }
}
