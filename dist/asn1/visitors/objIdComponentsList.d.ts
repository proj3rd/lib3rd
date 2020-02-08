import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjIdComponentsListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
/**
 * ANTLR4 grammar
 * ```
 * objIdComponentsList: (objIdComponents) (objIdComponents)*
 * ```
 */
export declare class ObjIdComponentsListVisitor extends AbstractParseTreeVisitor<any> implements ASN_3gppVisitor<any> {
    defaultResult(): any;
    visitChildren(objIdComponentsListCtx: ObjIdComponentsListContext): any;
}
