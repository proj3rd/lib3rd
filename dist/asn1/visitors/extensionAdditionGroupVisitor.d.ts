import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAdditionGroup } from '../classes/sequenceType';
import { ExtensionAdditionGroupContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * extensionAdditionGroup: DOUBLE_L_BRACKET versionNumber componentTypeList tag? DOUBLE_R_BRACKET
 * ```
 */
export declare class ExtensionAdditionGroupVisitor extends AbstractParseTreeVisitor<ExtensionAdditionGroup> implements ASN_3gppVisitor<ExtensionAdditionGroup> {
    visitChildren(ctx: ExtensionAdditionGroupContext): ExtensionAdditionGroup;
    protected defaultResult(): ExtensionAdditionGroup;
}
//# sourceMappingURL=extensionAdditionGroupVisitor.d.ts.map