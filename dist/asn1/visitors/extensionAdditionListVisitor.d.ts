import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAddition } from '../classes/sequenceType';
import { ExtensionAdditionListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * extensionAdditionList: (extensionAddition) (COMMA tag? extensionAddition)*
 * ```
 */
export declare class ExtensionAdditionListVisitor extends AbstractParseTreeVisitor<ExtensionAddition[]> implements ASN_3gppVisitor<ExtensionAddition[]> {
    visitChildren(ctx: ExtensionAdditionListContext): ExtensionAddition[];
    protected defaultResult(): ExtensionAddition[];
}
//# sourceMappingURL=extensionAdditionListVisitor.d.ts.map