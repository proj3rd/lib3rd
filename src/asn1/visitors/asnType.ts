import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';
import { DefinedTypeVisitor } from './definedType';
import { ReferencedTypeVisitor } from './referencedType';

/**
 * ANTLR4 grammar
 * ```
 * asnType : (builtinType | referencedType) (constraint)*
 * ```
 */
export class AsnTypeVisitor {
  public visitChildren(asnTypeCtx: any): any /* TODO */ {
    const childCtxes = asnTypeCtx.children;
    const typeCtx = childCtxes[0];
    const constraintCtx = childCtxes[1];
    const contextName = getContextName(typeCtx);
    let type = null;
    switch (contextName) {
      case 'builtinType': {
        // TODO
        log.warn(getLogWithAsn1(asnTypeCtx, 'BuiltinType not supported:'));
        break;
      }
      case 'referencedType': {
        type = typeCtx.accept(new ReferencedTypeVisitor());
        break;
      }
      default: {
        log.warn(getLogWithAsn1(asnTypeCtx, 'Not supported ASN1 in Type:'));
      }
    }
    if (constraintCtx) {
      // TODO
      log.warn('  Constraint is not supported');
    }
    return type;
  }
}
