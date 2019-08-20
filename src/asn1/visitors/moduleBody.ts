import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ModuleBodyContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { AssignmentListVisitor, IAssignments, IConstants } from './assignmentList';
import { ExportsVisitor } from './exports';
import { ImportsVisitor } from './imports';
import { ISymbolsFromModule } from './symbolsFromModuleList';

export interface IModuleBody {
  exports: string[];
  imports: ISymbolsFromModule;
  assignments: IAssignments;
  constants: IConstants;
}

/**
 * ANTLR4 grammar
 * ```
 * moduleBody :  (exports imports assignmentList) ?
 * ```
 */
export class ModuleBodyVisitor extends AbstractParseTreeVisitor<IModuleBody> implements ASN_3gppVisitor<IModuleBody> {
  public defaultResult(): IModuleBody {
    return { exports: [], imports: {}, assignments: {}, constants: {} };
  }

  public visitChildren(moduleBodyCtx: ModuleBodyContext): IModuleBody {
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
      ({assignments: moduleBody.assignments, constants: moduleBody.constants} =
        childCtx[2].accept(new AssignmentListVisitor()));
    }
    return moduleBody;
  }
}
