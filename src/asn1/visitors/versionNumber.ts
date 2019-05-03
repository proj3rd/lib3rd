import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

/**
 * ANTLR4 grammar
 * ```
 * versionNumber  :  (NUMBER  COLON )?
 * ```
 */
export class VersionNumberVisitor {
  public visitChildren(versionNumberCtx: any): any /* TODO */ {
    const childCtxes = versionNumberCtx.children;
    if (childCtxes) {
      log.warn(getLogWithAsn1(versionNumberCtx, 'VersionNumber not supported:'));
    }
    return null;
  }
}
