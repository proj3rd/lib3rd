/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { DefinedType } from '../classes/asnType';
import { ExternalTypeReference } from '../classes/externalTypeReference';
import { ParameterizedType } from '../classes/parameterizedType';
import { TypeReference } from '../classes/typeReference';
import { DefinedTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ActualParameterListVisitor } from './actualParameterListVisitor';

/**
 * # Grammar
 * ```
 * definedType: IDENTIFIER (DOT IDENTIFER)? actualParameterList?
 * ```
 */
export class DefinedTypeVisitor extends AbstractParseTreeVisitor<DefinedType>
  implements grammar3rdVisitor<DefinedType> {
  public visitChildren(ctx: DefinedTypeContext): DefinedType {
    switch (ctx.childCount) {
      case 1: {
        const typeReference = ctx.getChild(0).text;
        return new TypeReference(typeReference);
      }
      case 2: {
        const typeReference = ctx.getChild(0).text;
        const actualParameterListCtx = ctx.getChild(1);
        const actualParameterList = actualParameterListCtx.accept(
          new ActualParameterListVisitor(),
        );
        return new ParameterizedType(
          new TypeReference(typeReference),
          actualParameterList,
        );
      }
      case 3: {
        const moduleReference = ctx.getChild(0).text;
        const typeReference = ctx.getChild(2).text;
        return new ExternalTypeReference(moduleReference, typeReference);
      }
      case 4: {
        throw Error('Not implemented');
      }
      default: {
        throw Error();
      }
    }
  }

  protected defaultResult(): DefinedType {
    return new TypeReference('');
  }
}
