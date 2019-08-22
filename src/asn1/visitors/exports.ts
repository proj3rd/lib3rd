import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ExportsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

/**
 * exports :   (EXPORTS_LITERAL symbolsExported SEMI_COLON
 *  |    EXPORTS_LITERAL ALL_LITERAL SEMI_COLON )?
 */
export class ExportsVisitor extends AbstractParseTreeVisitor<string[]> implements ASN_3gppVisitor<string[]> {
  public defaultResult(): string[] {
    return [];
  }

  public visitChildren(exportsCtx: ExportsContext): string[] {
    const exports = [];
    if (exportsCtx.children) {
      log.warn(getLogWithAsn1(exportsCtx, 'Exports not supported:'));
    }
    return exports;
  }
}
