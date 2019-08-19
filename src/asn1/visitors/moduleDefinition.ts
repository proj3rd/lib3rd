import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ModuleDefinitionContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { IModuleBody, ModuleBodyVisitor } from './moduleBody';

export interface IModuleDefinition {
  moduleName: string;
  definition: IModuleBody;
}

/**
 * ANTLR4 grammar
 * ```
 * moduleDefinition :  IDENTIFIER (L_BRACE (IDENTIFIER L_PARAN NUMBER R_PARAN)* R_BRACE)?
 *      DEFINITIONS_LITERAL
 *      tagDefault
 *      extensionDefault
 *      ASSIGN_OP
 *       BEGIN_LITERAL
 *      moduleBody
 *       END_LITERAL
 * ```
 */
export class ModuleDefinitionVisitor extends AbstractParseTreeVisitor<IModuleDefinition>
                                     implements ASN_3gppVisitor<IModuleDefinition> {
  public defaultResult(): IModuleDefinition {
    return { moduleName: undefined, definition: undefined };
  }

  public visitChildren(moduleDefinitionCtx: ModuleDefinitionContext): IModuleDefinition {
    const {children: childCtxes} = moduleDefinitionCtx;
    const { length } = childCtxes;
    if (length > 8) {
      /**
       * TODO: matches to (L_BRACE (IDENTIFIER L_PARAN NUMBER R_PARAN)* R_BRACE)?
       * S1AP-PDU-Contents {
       *   itu-t (0) identified-organization (4) etsi (0) mobileDomain (0)
       *   eps-Access (21) modules (3) s1ap (1) version1 (1) s1ap-PDU-Contents (1) }
       * DEFINITIONS AUTOMATIC TAGS ::= ...
       */
      log.warn(getLogWithAsn1(moduleDefinitionCtx, 'DefinitiveIdentification not supported:'));
    }
    const moduleName = childCtxes[0].text;
    const moduleBodyCtx = childCtxes[length - 2];
    const definition = moduleBodyCtx.accept(new ModuleBodyVisitor());
    markModuleName(definition, moduleName);
    return {moduleName, definition};
  }
}

function markModuleName(definition: IModuleBody, moduleName: string): void {
  const assignments = definition.assignments;
  // tslint:disable-next-line: forin
  for (const identifier in assignments) {
    assignments[identifier].moduleName = moduleName;
  }
}
