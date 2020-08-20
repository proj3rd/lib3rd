import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionDefault } from '../classes/moduleDefinition';
import { ExtensionDefaultContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * extensionDefault: (EXTENSIBILITY_LITERAL IMPLIED_LITERAL)?
 * ```
 */
export declare class ExtensionDefaultVisitor extends AbstractParseTreeVisitor<ExtensionDefault> implements ASN_3gppVisitor<ExtensionDefault> {
    visitChildren(ctx: ExtensionDefaultContext): ExtensionDefault;
    protected defaultResult(): ExtensionDefault;
}
//# sourceMappingURL=extensionDefaultVisitor.d.ts.map