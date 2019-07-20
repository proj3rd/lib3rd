import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

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
export class ParameterizedAssignmentVisitor {
  public visitChildren(parameterizedAssignmentCtx: any): any /* TODO */ {
    let parameterList = null;
    let asnType = null;
    const childCtxes: any/* TODO */[] = parameterizedAssignmentCtx.children;
    childCtxes.every((childCtx: any /* TODO */) => {
      switch (getContextName(childCtx)) {
        case 'parameterList': {
          parameterList = childCtx.accept(new ParameterListVisitor());
          break;
        }
        case 'asnType': {
          asnType = childCtx.accept(new AsnTypeVisitor());
          break;
        }
        case 'value': {
          log.warn(getLogWithAsn1(parameterizedAssignmentCtx, 'ParameterizedValueAssignment not supported'));
          return false;
        }
        case 'valueSet': {
          log.warn(getLogWithAsn1(parameterizedAssignmentCtx, 'ParameterizedValueSetAssignment not supported'));
          return false;
        }
        case null: {
          break;
        }
        default: {
          log.warn(getLogWithAsn1(parameterizedAssignmentCtx, 'Not supported ASN.1'));
          return false;
        }
      }
      return true;
    });
    if (asnType) {
      asnType.parameterList = parameterList;
      return asnType;
    }
    return null;
  }
}
