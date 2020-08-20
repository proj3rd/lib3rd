import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjIdComponentsListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ObjectIdComponents } from '../types';
/**
 * # Grammar
 * ```
 * objIdComponentsList: (objIdComponents) (objIdComponents)*
 * ```
 */
export declare class ObjIdComponentsListVisitor extends AbstractParseTreeVisitor<ObjectIdComponents[]> implements ASN_3gppVisitor<ObjectIdComponents[]> {
    visitChildren(ctx: ObjIdComponentsListContext): ObjectIdComponents[];
    protected defaultResult(): ObjectIdComponents[];
}
//# sourceMappingURL=objIdComponentsListVisitor.d.ts.map