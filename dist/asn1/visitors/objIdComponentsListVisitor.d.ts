import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjIdComponentsListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ObjectIdComponents } from '../types';
/**
 * # Grammar
 * ```
 * objIdComponentsList: (objIdComponents) (objIdComponents)*
 * ```
 */
export declare class ObjIdComponentsListVisitor extends AbstractParseTreeVisitor<ObjectIdComponents[]> implements grammar3rdVisitor<ObjectIdComponents[]> {
    visitChildren(ctx: ObjIdComponentsListContext): ObjectIdComponents[];
    protected defaultResult(): ObjectIdComponents[];
}
//# sourceMappingURL=objIdComponentsListVisitor.d.ts.map