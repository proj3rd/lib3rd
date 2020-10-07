import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Modules } from '../classes/modules';
import { ModulesContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * modules: moduleDefinition
 * ```
 */
export declare class ModulesVisitor extends AbstractParseTreeVisitor<Modules> implements grammar3rdVisitor<Modules> {
    visitChildren(ctx: ModulesContext): Modules;
    protected defaultResult(): Modules;
}
//# sourceMappingURL=modulesVisitor.d.ts.map