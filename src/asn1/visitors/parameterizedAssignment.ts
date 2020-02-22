import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { AsnTypeContext, DefinedObjectClassContext, ObjectClassContext,
        ObjectSetContext, ParameterizedAssignmentContext, ParameterListContext,
        ValueContext, ValueSetContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { DefinedObjectClass } from '../classes/definedObjectClass';
import { ObjectSet } from '../classes/objectSet';
import { Parameter } from '../classes/parameter';
import { AsnTypeVisitor } from './asnType';
import { DefinedObjectClassVisitor } from './definedObjectClass';
import { ObjectSetVisitor } from './objectSet';
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
export class ParameterizedAssignmentVisitor extends AbstractParseTreeVisitor<AsnType | ObjectSet>
                                            implements ASN_3gppVisitor<AsnType | ObjectSet> {
  public defaultResult(): AsnType | ObjectSet {
    return undefined;
  }

  public visitChildren(parameterizedAssignmentCtx: ParameterizedAssignmentContext): AsnType | ObjectSet {
    let parameterList: Parameter[];
    let definedObjectClass: DefinedObjectClass;
    let asnType: AsnType;
    let object: ObjectSet;
    const childCtxes = parameterizedAssignmentCtx.children;
    childCtxes.forEach((childCtx) => {
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
      } else if (childCtx instanceof DefinedObjectClassContext) {
        definedObjectClass = childCtx.accept(new DefinedObjectClassVisitor());
      } else if (childCtx instanceof ObjectClassContext ) {
        log.warn(new Error('TODO: ObjectClassContext'));
      } else if (childCtx instanceof ObjectSetContext) {
        object = childCtx.accept(new ObjectSetVisitor());
      } else {
        log.warn(new Error(getLogWithAsn1(parameterizedAssignmentCtx, 'Not supported ASN.1')));
      }
    });
    if (asnType) {
      asnType.parameterList = parameterList;
      return asnType;
    }
    if (object) {
      object.definedObjectClass = definedObjectClass;
      return object;
    }
  }
}
