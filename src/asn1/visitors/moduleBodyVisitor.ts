import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { IModuleBody } from '../classes/moduleDefinition';
import { ModuleBodyContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { AssignmentListVisitor } from './assignmentListVisitor';
import { ExportsVisitor } from './exportsVisitor';
import { ImportsVisitor } from './importsVisitor';

/**
 * # Grammar
 * ```
 * moduleBody: (exports imports assignmentList)?
 * ```
 */
export class ModuleBodyVisitor extends AbstractParseTreeVisitor<IModuleBody>
  implements ASN_3gppVisitor<IModuleBody> {
  public visitChildren(ctx: ModuleBodyContext): IModuleBody {
    const exportsCtx = ctx.exports();
    const exports =
      exportsCtx === undefined ? null : exportsCtx.accept(new ExportsVisitor());
    const importsCtx = ctx.imports();
    const imports =
      importsCtx === undefined ? null : importsCtx.accept(new ImportsVisitor());
    const assignmentListCtx = ctx.assignmentList();
    const assignments =
      assignmentListCtx === undefined
        ? null
        : assignmentListCtx.accept(new AssignmentListVisitor());
    return { exports, imports, assignments };
  }

  protected defaultResult(): IModuleBody {
    return {
      exports: null,
      imports: null,
      assignments: null,
    };
  }
}
