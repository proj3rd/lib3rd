import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ObjectClassFieldTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { DefinedObjectClassVisitor } from './definedObjectClass';

/**
 * ANTLR4 grammar
 * ```
 * objectClassFieldType : definedObjectClass DOT fieldName
 * ```
 */
export class ObjectClassFieldTypeVisitor extends AbstractParseTreeVisitor<ObjectClassFieldType>
                                         implements ASN_3gppVisitor<ObjectClassFieldType> {
  public defaultResult(): ObjectClassFieldType {
    return undefined;
  }

  public visitChildren(objectClassFieldTypeCtx: ObjectClassFieldTypeContext): ObjectClassFieldType {
    const definedObjectClassCtx = objectClassFieldTypeCtx.children[0];
    const { moduleReference, objectClassReference } = definedObjectClassCtx.accept(new DefinedObjectClassVisitor());
    const fieldName = objectClassFieldTypeCtx.children[2].text;
    return new ObjectClassFieldType(moduleReference, objectClassReference, fieldName);
  }
}
