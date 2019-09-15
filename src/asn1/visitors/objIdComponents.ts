import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';

import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { BuiltinTypeContext, DefinedValueContext, ObjIdComponentsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { getLogWithAsn1 } from '../utils';
import { BuiltinTypeVisitor } from './builtinType';

/**
 * ANTLR4 grammar
 * ```
 * objIdComponents  :
 * 	    	NUMBER
 * 	|    	IDENTIFIER (L_PARAN (NUMBER | definedValue ) R_PARAN)?
 * 	|    	builtinType
 * 	|    	definedValue
 * ```
 */
export class ObjIdComponentsVisitor extends AbstractParseTreeVisitor<any /* TODO */>
                                  implements ASN_3gppVisitor<any /* TODO */> {
  public defaultResult(): any /* TODO */ {
    return undefined;
  }

  public visitChildren(objIdComponentsCtx: ObjIdComponentsContext): any /* TODO */ {
    const { children } = objIdComponentsCtx;
    let objIdComponents: any;
    const firstCtx = children[0];
    if (firstCtx instanceof BuiltinTypeContext) {
      objIdComponents = firstCtx.accept(new BuiltinTypeVisitor());
    } else if (firstCtx instanceof DefinedValueContext) {
      log.warn(new Error(getLogWithAsn1(objIdComponentsCtx, 'DefinedValue not supported')));
    } else if (firstCtx instanceof TerminalNode) {
      if (children.length > 1) {
        log.warn(new Error('NameAndNumberForm not supported'));
      }
      objIdComponents = firstCtx.text;
      const objIdComponentsNum = Number(objIdComponents);
      objIdComponents = isNaN(objIdComponentsNum) ? objIdComponents : objIdComponentsNum;
    } else {
      log.warn(new Error(getLogWithAsn1(objIdComponentsCtx, 'Not supported ASN.1')));
    }
    return objIdComponents;
  }
}
