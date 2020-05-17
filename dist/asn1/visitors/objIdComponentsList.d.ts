import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjIdComponentsListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { BuiltinType } from './builtinType';
/**
 * ANTLR4 grammar
 * ```
 * objIdComponentsList: (objIdComponents) (objIdComponents)*
 * ```
 */
export declare class ObjIdComponentsListVisitor extends AbstractParseTreeVisitor<Array<BuiltinType | string | number>> implements ASN_3gppVisitor<Array<BuiltinType | string | number>> {
    defaultResult(): Array<BuiltinType | string | number>;
    visitChildren(objIdComponentsListCtx: ObjIdComponentsListContext): Array<BuiltinType | string | number>;
}
