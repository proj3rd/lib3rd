import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectSetContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ObjectSet } from '../classes/objectSet';
/**
 * ANTLR4 grammar
 * ```
 * objectSet : L_BRACE objectSetSpec R_BRACE
 * ```
 */
export declare class ObjectSetVisitor extends AbstractParseTreeVisitor<ObjectSet> implements ASN_3gppVisitor<ObjectSet> {
    defaultResult(): ObjectSet;
    visitChildren(objectSetCtx: ObjectSetContext): ObjectSet;
}
