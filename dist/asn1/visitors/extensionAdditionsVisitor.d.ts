import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAddition } from '../classes/sequenceType';
import { ExtensionAdditionsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * #  Grammar
 * ```
 * extensionAdditions: (COMMA extensionAdditionList)?
 * ```
 */
export declare class ExtensionAdditionsVisitor extends AbstractParseTreeVisitor<ExtensionAddition[]> implements grammar3rdVisitor<ExtensionAddition[]> {
    visitChildren(ctx: ExtensionAdditionsContext): ExtensionAddition[];
    protected defaultResult(): ExtensionAddition[];
}
//# sourceMappingURL=extensionAdditionsVisitor.d.ts.map