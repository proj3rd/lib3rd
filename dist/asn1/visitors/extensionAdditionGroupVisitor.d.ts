import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAdditionGroup } from '../classes/extensionAdditionGroup';
import { ExtensionAdditionGroupContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * extensionAdditionGroup: DOUBLE_L_BRACKET versionNumber componentTypeList tag? DOUBLE_R_BRACKET
 * ```
 */
export declare class ExtensionAdditionGroupVisitor extends AbstractParseTreeVisitor<ExtensionAdditionGroup> implements grammar3rdVisitor<ExtensionAdditionGroup> {
    visitChildren(ctx: ExtensionAdditionGroupContext): ExtensionAdditionGroup;
    protected defaultResult(): ExtensionAdditionGroup;
}
//# sourceMappingURL=extensionAdditionGroupVisitor.d.ts.map