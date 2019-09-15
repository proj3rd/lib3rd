import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { DefinedObjectClassContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

export interface IDefinedObjectClass {
  moduleReference: string;
  objectClassReference: string;
}

/**
 * ANTLR4 grammar
 * ```
 *  definedObjectClass :
 *    (IDENTIFIER DOT)? IDENTIFIER
 *    | TYPE_IDENTIFIER_LITERAL
 *    |  ABSTRACT_SYNTAX_LITERAL
 * ```
 */
export class DefinedObjectClassVisitor extends AbstractParseTreeVisitor<IDefinedObjectClass>
                                       implements ASN_3gppVisitor<IDefinedObjectClass> {
  public defaultResult(): IDefinedObjectClass {
    return { moduleReference: undefined, objectClassReference: undefined };
  }

  public visitChildren(definedObjectClassCtx: DefinedObjectClassContext): IDefinedObjectClass {
    const definedObjectClass: IDefinedObjectClass = {
      moduleReference: undefined,
      objectClassReference: undefined,
    };
    if (definedObjectClassCtx.childCount === 1) {
      definedObjectClass.objectClassReference = definedObjectClassCtx.children[0].text;
    } else {
      definedObjectClass.moduleReference = definedObjectClassCtx.children[0].text;
      definedObjectClass.objectClassReference = definedObjectClassCtx.children[1].text;
    }
    return definedObjectClass;
  }
}
