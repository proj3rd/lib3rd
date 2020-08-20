import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RootSequenceComponents } from '../classes/sequenceType';
import { RootComponentTypeListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * rootComponentTypeList: componentTypeList
 * ```
 */
export declare class RootComponentTypeListVisitor extends AbstractParseTreeVisitor<RootSequenceComponents[]> implements ASN_3gppVisitor<RootSequenceComponents[]> {
    visitChildren(ctx: RootComponentTypeListContext): RootSequenceComponents[];
    protected defaultResult(): RootSequenceComponents[];
}
//# sourceMappingURL=rootComponentTypeListVisitor.d.ts.map