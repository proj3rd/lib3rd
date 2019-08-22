import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { VersionNumberContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

/**
 * ANTLR4 grammar
 * ```
 * versionNumber  :  (NUMBER  COLON )?
 * ```
 */
export class VersionNumberVisitor extends AbstractParseTreeVisitor<null>
                                  implements ASN_3gppVisitor<null> {
  public defaultResult(): null {
    return null;
  }

  public visitChildren(versionNumberCtx: VersionNumberContext): null {
    const childCtxes = versionNumberCtx.children;
    if (childCtxes) {
      log.warn(getLogWithAsn1(versionNumberCtx, 'VersionNumber not supported:'));
    }
    return null;
  }
}
