import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAdditionAlternative } from '../classes/choiceType';
import { ExtensionAdditionAlternativesContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * extensionAdditionAlternatives: (COMMA extensionAdditionAlternativesList)?
 * ```
 */
export declare class ExtensionAdditionAlternativesVisitor extends AbstractParseTreeVisitor<ExtensionAdditionAlternative[]> implements grammar3rdVisitor<ExtensionAdditionAlternative[]> {
    visitChildren(ctx: ExtensionAdditionAlternativesContext): ExtensionAdditionAlternative[];
    protected defaultResult(): ExtensionAdditionAlternative[];
}
//# sourceMappingURL=extensionAdditionAlternativesVisitor.d.ts.map