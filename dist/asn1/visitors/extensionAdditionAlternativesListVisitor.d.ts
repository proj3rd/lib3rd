import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAdditionAlternative } from '../classes/choiceType';
import { ExtensionAdditionAlternativesListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * extensionAdditionAlternativesList:
 *   (extensionAdditionAlternative) (COMMA extensionAdditionAlternative)*
 * ```
 */
export declare class ExtensionAdditionAlternativesListVisitor extends AbstractParseTreeVisitor<ExtensionAdditionAlternative[]> implements grammar3rdVisitor<ExtensionAdditionAlternative[]> {
    visitChildren(ctx: ExtensionAdditionAlternativesListContext): ExtensionAdditionAlternative[];
    protected defaultResult(): ExtensionAdditionAlternative[];
}
//# sourceMappingURL=extensionAdditionAlternativesListVisitor.d.ts.map