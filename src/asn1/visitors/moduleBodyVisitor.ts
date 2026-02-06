/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { IModuleBody } from '../classes/moduleDefinition';
import { ModuleBodyContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
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
  implements grammar3rdVisitor<IModuleBody> {
  public visitChildren(ctx: ModuleBodyContext): IModuleBody {
    const exportsCtx = ctx.exports();
    const exports = exportsCtx === undefined ? null : exportsCtx.accept(new ExportsVisitor());
    const importsCtx = ctx.imports();
    const imports = importsCtx === undefined ? null : importsCtx.accept(new ImportsVisitor());
    const assignmentListCtx = ctx.assignmentList();
    const assignments = assignmentListCtx === undefined
      ? []
      : assignmentListCtx.accept(new AssignmentListVisitor());
    return { exports, imports, assignments };
  }

  protected defaultResult(): IModuleBody {
    return unimpl();
  }
}
