export interface IModuleBody {
  imports: any /* TODO */;
  exports: any /* TODO */;
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
    // TODO
    const moduleBody: IModuleBody = {
      imports: {},
      exports: {},
      assignments: {},
      constants: {},
    };
    return moduleBody;
  }
}
