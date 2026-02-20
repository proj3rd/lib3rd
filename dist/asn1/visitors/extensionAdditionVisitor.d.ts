import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAddition } from '../classes/sequenceType';
import { ExtensionAdditionContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * extensionAddition: componentType | extensionAdditionGroup
 * ```
 */
export declare class ExtensionAdditionVisitor extends AbstractParseTreeVisitor<ExtensionAddition> implements grammar3rdVisitor<ExtensionAddition> {
    visitChildren(ctx: ExtensionAdditionContext): ExtensionAddition;
    protected defaultResult(): ExtensionAddition;
}
//# sourceMappingURL=extensionAdditionVisitor.d.ts.map