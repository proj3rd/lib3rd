import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { IModuleBody } from '../classes/moduleDefinition';
import { ModuleBodyContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * moduleBody: (exports imports assignmentList)?
 * ```
 */
export declare class ModuleBodyVisitor extends AbstractParseTreeVisitor<IModuleBody> implements ASN_3gppVisitor<IModuleBody> {
    visitChildren(ctx: ModuleBodyContext): IModuleBody;
    protected defaultResult(): IModuleBody;
}
//# sourceMappingURL=moduleBodyVisitor.d.ts.map