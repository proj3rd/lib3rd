import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ObjectClassFieldTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ObjectClassField } from '../classes/objectClassField';
import { DefinedObjectClassVisitor } from './definedObjectClass';

/**
 * ANTLR4 grammar
 * ```
 * objectClassFieldType : definedObjectClass DOT fieldName
 * ```
 */
export class ObjectClassFieldTypeVisitor extends AbstractParseTreeVisitor<ObjectClassField>
                                         implements ASN_3gppVisitor<ObjectClassField> {
  public defaultResult(): ObjectClassField {
    return undefined;
  }

  public visitChildren(objectClassFieldTypeCtx: ObjectClassFieldTypeContext): ObjectClassField {
    const { children } = objectClassFieldTypeCtx;
    const definedObjectClassCtx = children[0];
    const { moduleReference, objectClassReference } = definedObjectClassCtx.accept(new DefinedObjectClassVisitor());
    const fieldName = children[2].text;
    return new ObjectClassField(moduleReference, objectClassReference, fieldName);
  }
}
