import { ExportsVisitor } from './exports';
import { ImportsVisitor } from './imports';
import { ISymbolsFromModule } from './symbolsFromModuleList';

export interface IModuleBody {
  exports: string[];
  imports: ISymbolsFromModule;
  assignments: any /* TODO */;
  constants: any /* TODO */;
}

/**
 * ANTLR4 grammar
 * ```
 * moduleBody :  (exports imports assignmentList) ?
 * ```
 */
export class ModuleBodyVisitor {
  public visitChildren(moduleBodyCtx: any): IModuleBody {
    const childCtx = moduleBodyCtx.children;
    const moduleBody: IModuleBody = {
      exports: [],
      imports: {},
      assignments: {},
      constants: {},
    };
    if (childCtx) {
      moduleBody.exports = childCtx[0].accept(new ExportsVisitor());
      moduleBody.imports = childCtx[1].accept(new ImportsVisitor());
      // TODO
      // ({assignments: moduleBody.assignments, constants: moduleBody.constants} =
      //   childCtx[2].accept(new AssignmentListVisitor()));
    }
    return moduleBody;
  }
}
