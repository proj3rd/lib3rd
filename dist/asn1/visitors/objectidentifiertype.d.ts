import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectidentifiertypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ObjectIdentifier } from '../classes/objectIdentifier';
/**
 * ANTLR4 grammar
 * ```
 * objectidentifiertype  :  OBJECT_LITERAL IDENTIFIER_LITERAL
 * ```
 */
export declare class ObjectidentifiertypeVisitor extends AbstractParseTreeVisitor<ObjectIdentifier> implements ASN_3gppVisitor<ObjectIdentifier> {
    defaultResult(): ObjectIdentifier;
    visitChildren(objectidentifiertypeCtx: ObjectidentifiertypeContext): ObjectIdentifier;
}
