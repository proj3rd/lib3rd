import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ReferencedType } from '../classes/asnType';
import { TypeReference } from '../classes/typeReference';
import { ReferencedTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { DefinedTypeVisitor } from './definedTypeVisitor';

/**
 * # Grammar
 * ```
 * referencedType: definedType
 * ```
 */
export class ReferencedTypeVisitor
  extends AbstractParseTreeVisitor<ReferencedType>
  implements ASN_3gppVisitor<ReferencedType> {
  public visitChildren(ctx: ReferencedTypeContext): ReferencedType {
    const definedTypeCtx = ctx.definedType();
    return definedTypeCtx.accept(new DefinedTypeVisitor());
  }

  protected defaultResult(): ReferencedType {
    return new TypeReference('');
  }
}
