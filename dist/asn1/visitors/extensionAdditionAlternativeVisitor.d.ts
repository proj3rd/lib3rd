import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAdditionAlternative } from '../classes/choiceType';
import { ExtensionAdditionAlternativeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * extensionAdditionAlternative: extensionAdditionAlternativesGroup | namedType
 * ```
 */
export declare class ExtensionAdditionAlternativeVisitor extends AbstractParseTreeVisitor<ExtensionAdditionAlternative> implements ASN_3gppVisitor<ExtensionAdditionAlternative> {
    visitChildren(ctx: ExtensionAdditionAlternativeContext): ExtensionAdditionAlternative;
    protected defaultResult(): ExtensionAdditionAlternative;
}
//# sourceMappingURL=extensionAdditionAlternativeVisitor.d.ts.map