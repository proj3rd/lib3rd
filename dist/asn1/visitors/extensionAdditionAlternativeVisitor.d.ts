import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAdditionAlternative } from '../classes/choiceType';
import { ExtensionAdditionAlternativeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * extensionAdditionAlternative: extensionAdditionAlternativesGroup | namedType
 * ```
 */
export declare class ExtensionAdditionAlternativeVisitor extends AbstractParseTreeVisitor<ExtensionAdditionAlternative> implements grammar3rdVisitor<ExtensionAdditionAlternative> {
    visitChildren(ctx: ExtensionAdditionAlternativeContext): ExtensionAdditionAlternative;
    protected defaultResult(): ExtensionAdditionAlternative;
}
//# sourceMappingURL=extensionAdditionAlternativeVisitor.d.ts.map