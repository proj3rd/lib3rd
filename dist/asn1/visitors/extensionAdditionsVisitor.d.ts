import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAddition } from '../classes/sequenceType';
import { ExtensionAdditionsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * #  Grammar
 * ```
 * extensionAdditions: (COMMA extensionAdditionList)?
 * ```
 */
export declare class ExtensionAdditionsVisitor extends AbstractParseTreeVisitor<ExtensionAddition[]> implements ASN_3gppVisitor<ExtensionAddition[]> {
    visitChildren(ctx: ExtensionAdditionsContext): ExtensionAddition[];
    protected defaultResult(): ExtensionAddition[];
}
//# sourceMappingURL=extensionAdditionsVisitor.d.ts.map