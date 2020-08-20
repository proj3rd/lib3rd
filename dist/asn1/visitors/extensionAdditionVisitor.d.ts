import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAddition } from '../classes/sequenceType';
import { ExtensionAdditionContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * extensionAddition: componentType | extensionAdditionGroup
 * ```
 */
export declare class ExtensionAdditionVisitor extends AbstractParseTreeVisitor<ExtensionAddition> implements ASN_3gppVisitor<ExtensionAddition> {
    visitChildren(ctx: ExtensionAdditionContext): ExtensionAddition;
    protected defaultResult(): ExtensionAddition;
}
//# sourceMappingURL=extensionAdditionVisitor.d.ts.map