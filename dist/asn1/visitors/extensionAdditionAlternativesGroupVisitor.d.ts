import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAdditionAlternativeGroup } from '../classes/extensionAdditionAlternativeGroup';
import { ExtensionAdditionAlternativesGroupContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * extensionAdditionAlternativesGroup:
 *   DOUBLE_L_BRACKET versionNumber alternativeTypeList DOUBLE_R_BRACKET
 * ```
 */
export declare class ExtensionAdditionAlternativesGroupVisitor extends AbstractParseTreeVisitor<ExtensionAdditionAlternativeGroup> implements grammar3rdVisitor<ExtensionAdditionAlternativeGroup> {
    visitChildren(ctx: ExtensionAdditionAlternativesGroupContext): ExtensionAdditionAlternativeGroup;
    protected defaultResult(): ExtensionAdditionAlternativeGroup;
}
//# sourceMappingURL=extensionAdditionAlternativesGroupVisitor.d.ts.map