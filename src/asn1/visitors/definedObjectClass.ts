import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { DefinedObjectClassContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { DefinedObjectClass } from '../classes/definedObjectClass';

/**
 * ANTLR4 grammar
 * ```
 *  definedObjectClass :
 *    (IDENTIFIER DOT)? IDENTIFIER
 *    | TYPE_IDENTIFIER_LITERAL
 *    |  ABSTRACT_SYNTAX_LITERAL
 * ```
 */
export class DefinedObjectClassVisitor extends AbstractParseTreeVisitor<DefinedObjectClass>
                                       implements ASN_3gppVisitor<DefinedObjectClass> {
  public defaultResult(): DefinedObjectClass {
    return undefined;
  }

  public visitChildren(definedObjectClassCtx: DefinedObjectClassContext): DefinedObjectClass {
    const childCtxes = definedObjectClassCtx.children;
    const moduleReference = childCtxes.length === 1 ? undefined : childCtxes[0].text;
    const objectClassReference = childCtxes.length === 1 ? childCtxes[0].text : childCtxes[1].text;
    return new DefinedObjectClass(moduleReference, objectClassReference);
  }
}
