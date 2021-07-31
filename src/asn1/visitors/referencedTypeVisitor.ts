/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TypeReference } from '../classes/typeReference';
import { ReferencedTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ReferencedType } from '../types/referencedType';
import { DefinedTypeVisitor } from './definedTypeVisitor';

/**
 * # Grammar
 * ```
 * referencedType: definedType
 * ```
 */
export class ReferencedTypeVisitor
  extends AbstractParseTreeVisitor<ReferencedType>
  implements grammar3rdVisitor<ReferencedType> {
  public visitChildren(ctx: ReferencedTypeContext): ReferencedType {
    const definedTypeCtx = ctx.definedType();
    return definedTypeCtx.accept(new DefinedTypeVisitor());
  }

  protected defaultResult(): ReferencedType {
    return new TypeReference('');
  }
}
