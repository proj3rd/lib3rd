import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectSet } from '../classes/objectSet';
import { ObjectSetContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * objectSet: L_BRACE objectSetSpec R_BRACE
 * ```
 */
export declare class ObjectSetVisitor extends AbstractParseTreeVisitor<ObjectSet> implements grammar3rdVisitor<ObjectSet> {
    visitChildren(ctx: ObjectSetContext): ObjectSet;
    protected defaultResult(): ObjectSet;
}
//# sourceMappingURL=objectSetVisitor.d.ts.map