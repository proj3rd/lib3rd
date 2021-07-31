import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RootComponentTypeListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { RootSequenceComponents } from '../types/rootSequenceComponents';
/**
 * # Grammar
 * ```
 * rootComponentTypeList: componentTypeList
 * ```
 */
export declare class RootComponentTypeListVisitor extends AbstractParseTreeVisitor<RootSequenceComponents[]> implements grammar3rdVisitor<RootSequenceComponents[]> {
    visitChildren(ctx: RootComponentTypeListContext): RootSequenceComponents[];
    protected defaultResult(): RootSequenceComponents[];
}
//# sourceMappingURL=rootComponentTypeListVisitor.d.ts.map