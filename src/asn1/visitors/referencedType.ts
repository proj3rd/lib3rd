import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ReferencedTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { DefinedType } from '../classes/definedType';
import { DefinedTypeVisitor } from './definedType';

/**
 * ANTLR4 grammar
 * ```
 * referencedType :
 *   definedType
 * ```
 */
export class ReferencedTypeVisitor extends AbstractParseTreeVisitor<DefinedType>
                                   implements ASN_3gppVisitor<DefinedType> {
  public defaultResult(): DefinedType {
    return undefined;
  }

  public visitChildren(referencedTypeCtx: ReferencedTypeContext): DefinedType {
    const definedTypeCtx = referencedTypeCtx.children[0];
    return definedTypeCtx.accept(new DefinedTypeVisitor());
  }
}
