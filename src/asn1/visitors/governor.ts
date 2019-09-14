import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';

import { AsnTypeContext, DefinedObjectClassContext, GovernorContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { getLogWithAsn1 } from '../utils';
import { AsnTypeVisitor } from './asnType';
import { DefinedObjectClassVisitor, IDefinedObjectClass } from './definedObjectClass';

/**
 * ANTLR4 grammar
 * ```
 * governor : asnType | definedObjectClass
 * ```
 */
export class GovernorVisitor extends AbstractParseTreeVisitor<AsnType | IDefinedObjectClass>
                                  implements ASN_3gppVisitor<AsnType | IDefinedObjectClass> {
  public defaultResult(): AsnType | IDefinedObjectClass {
    return undefined;
  }

  public visitChildren(governorCtx: GovernorContext): AsnType | IDefinedObjectClass {
    const childCtx = governorCtx.children[0];
    if (childCtx instanceof AsnTypeContext) {
      return childCtx.accept(new AsnTypeVisitor());
    } else if (childCtx instanceof DefinedObjectClassContext) {
      return childCtx.accept(new DefinedObjectClassVisitor());
    } else {
      log.warn(new Error(getLogWithAsn1(governorCtx, 'Unknown ASN.1')));
    }
  }
}
