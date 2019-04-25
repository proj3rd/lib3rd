import { log } from '../../utils/logging';

/**
 * exports :   (EXPORTS_LITERAL symbolsExported SEMI_COLON
 *  |    EXPORTS_LITERAL ALL_LITERAL SEMI_COLON )?
 */
export class ExportsVisitor {
  public visitChildren(exportsCtx: any): string[] {
    const exports = [];
    if (exportsCtx.children) {
      log.warn('ASN.1 contains Exports defined in X.680');
      log.warn('This will not be treated in the current version');
    }
    return exports;
  }
}
