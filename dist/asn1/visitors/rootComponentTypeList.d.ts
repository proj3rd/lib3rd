import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RootComponentTypeListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { NamedType } from '../classes/namedType';
/**
 * ANTLR4 grammar
 * ```
 * rootComponentTypeList  : componentTypeList
 * ```
 */
export declare class RootComponentTypeListVisitor extends AbstractParseTreeVisitor<NamedType[]> implements ASN_3gppVisitor<NamedType[]> {
    defaultResult(): NamedType[];
    visitChildren(rootComponentTypeListCtx: RootComponentTypeListContext): NamedType[];
}
