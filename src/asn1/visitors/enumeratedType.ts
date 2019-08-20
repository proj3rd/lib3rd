import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { EnumeratedTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { Enumerated } from '../classes/enumerated';
import { EnumerationsVisitor } from './enumerations';

/**
 * ANTLR4 grammar
 * ```
 * enumeratedType : ENUMERATED_LITERAL L_BRACE enumerations R_BRACE
 * ```
 */
export class EnumeratedTypeVisitor extends AbstractParseTreeVisitor<Enumerated>
                                   implements ASN_3gppVisitor<Enumerated> {
  public defaultResult(): Enumerated {
    return undefined;
  }

  public visitChildren(enumeratedTypeCtx: EnumeratedTypeContext): Enumerated {
    const enumerationsCtx = enumeratedTypeCtx.children[2];
    return new Enumerated(enumerationsCtx.accept(new EnumerationsVisitor()));
  }
}
