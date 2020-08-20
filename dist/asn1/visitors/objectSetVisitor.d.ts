import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectSet } from '../classes/objectSet';
import { ObjectSetContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * objectSet: L_BRACE objectSetSpec R_BRACE
 * ```
 */
export declare class ObjectSetVisitor extends AbstractParseTreeVisitor<ObjectSet> implements ASN_3gppVisitor<ObjectSet> {
    visitChildren(ctx: ObjectSetContext): ObjectSet;
    protected defaultResult(): ObjectSet;
}
//# sourceMappingURL=objectSetVisitor.d.ts.map