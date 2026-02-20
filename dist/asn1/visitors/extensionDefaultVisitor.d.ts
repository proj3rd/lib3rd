import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionDefaultContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ExtensionDefault } from '../types/extensionDefault';
/**
 * # Grammar
 * ```
 * extensionDefault: (EXTENSIBILITY_LITERAL IMPLIED_LITERAL)?
 * ```
 */
export declare class ExtensionDefaultVisitor extends AbstractParseTreeVisitor<ExtensionDefault> implements grammar3rdVisitor<ExtensionDefault> {
    visitChildren(ctx: ExtensionDefaultContext): ExtensionDefault;
    protected defaultResult(): ExtensionDefault;
}
//# sourceMappingURL=extensionDefaultVisitor.d.ts.map