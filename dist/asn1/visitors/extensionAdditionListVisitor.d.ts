import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAddition } from '../classes/sequenceType';
import { ExtensionAdditionListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * extensionAdditionList: (extensionAddition) (COMMA tag? extensionAddition)*
 * ```
 */
export declare class ExtensionAdditionListVisitor extends AbstractParseTreeVisitor<ExtensionAddition[]> implements grammar3rdVisitor<ExtensionAddition[]> {
    visitChildren(ctx: ExtensionAdditionListContext): ExtensionAddition[];
    protected defaultResult(): ExtensionAddition[];
}
//# sourceMappingURL=extensionAdditionListVisitor.d.ts.map