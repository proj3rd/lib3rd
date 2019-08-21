import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { ParameterizedAssignmentContext } from '../ASN_3gppParser';
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
    }
    return asnType;
  }
}
