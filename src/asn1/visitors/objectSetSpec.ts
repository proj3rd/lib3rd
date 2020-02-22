import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';

import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { AdditionalElementSetSpecContext, ObjectSetSpecContext, RootElementSetSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionMarker } from '../classes/extensionMarker';
import { ObjectSetSpec } from '../classes/objectSetSpec';
import { getLogWithAsn1 } from '../utils';
import { AdditionalElementSetSpecVisitor } from './additionalElementSetSpec';
import { RootElementSetSpecVisitor } from './rootElementSetSpec';
import { Unions } from './unions';

/**
 * ANTLR4 grammar
 * ```
 * objectSetSpec :
 *   rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec )?)?
 *  | ELLIPSIS (COMMA additionalElementSetSpec )?
 * ```
 */
export class ObjectSetSpecVisitor extends AbstractParseTreeVisitor<ObjectSetSpec>
                                  implements ASN_3gppVisitor<ObjectSetSpec> {
  public defaultResult(): ObjectSetSpec {
    return new ObjectSetSpec([]);
  }

  public visitChildren(objectSetSpecCtx: ObjectSetSpecContext): ObjectSetSpec {
    const objectSetSpec: Unions = [];
    const { children } = objectSetSpecCtx;
    children.forEach((childCtx) => {
      if (childCtx instanceof RootElementSetSpecContext) {
        const rootElementSetSpec = childCtx.accept(new RootElementSetSpecVisitor());
        objectSetSpec.splice(objectSetSpec.length, 0, ...rootElementSetSpec);
      } else if (childCtx instanceof AdditionalElementSetSpecContext) {
        const additionalElementSetSpec = childCtx.accept(new AdditionalElementSetSpecVisitor());
        objectSetSpec.splice(objectSetSpec.length, 0, ...additionalElementSetSpec);
      } else if (childCtx instanceof TerminalNode) {
        if (childCtx.text === '...') {
          objectSetSpec.push(new ExtensionMarker());
        }
      } else {
        log.warn(new Error(getLogWithAsn1(childCtx, 'Not supported ASN.1')));
      }
    });
    return new ObjectSetSpec(objectSetSpec);
  }
}
