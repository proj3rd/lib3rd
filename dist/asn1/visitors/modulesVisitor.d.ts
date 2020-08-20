import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Modules } from '../classes/modules';
import { ModulesContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * modules: moduleDefinition
 * ```
 */
export declare class ModulesVisitor extends AbstractParseTreeVisitor<Modules> implements ASN_3gppVisitor<Modules> {
    visitChildren(ctx: ModulesContext): Modules;
    protected defaultResult(): Modules;
}
//# sourceMappingURL=modulesVisitor.d.ts.map