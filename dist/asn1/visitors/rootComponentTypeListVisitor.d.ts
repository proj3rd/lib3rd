import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RootSequenceComponents } from '../classes/sequenceType';
import { RootComponentTypeListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
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