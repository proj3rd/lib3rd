import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { IModuleBody } from '../classes/moduleDefinition';
import { ModuleBodyContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * moduleBody: (exports imports assignmentList)?
 * ```
 */
export declare class ModuleBodyVisitor extends AbstractParseTreeVisitor<IModuleBody> implements grammar3rdVisitor<IModuleBody> {
    visitChildren(ctx: ModuleBodyContext): IModuleBody;
    protected defaultResult(): IModuleBody;
}
//# sourceMappingURL=moduleBodyVisitor.d.ts.map