import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

/**
 * exports :   (EXPORTS_LITERAL symbolsExported SEMI_COLON
 *  |    EXPORTS_LITERAL ALL_LITERAL SEMI_COLON )?
 */
export class ExportsVisitor {
  public visitChildren(exportsCtx: any): string[] {
    const exports = [];
    if (exportsCtx.children) {
      log.warn(getLogWithAsn1(exportsCtx, 'Exports not supported:'));
    }
    return exports;
  }
}
