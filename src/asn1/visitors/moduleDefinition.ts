import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ModuleDefinitionContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { IModuleBody, ModuleBodyVisitor } from './moduleBody';

interface IDefinitiveObjIdComponent {
  definitiveName: string;
  definitiveNumber: number;
}

export interface IModuleDefinition {
  moduleName: string;
  definition: IModuleBody;
  definitiveIdentification: IDefinitiveObjIdComponent[];
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
    return undefined;
  }

  public visitChildren(moduleDefinitionCtx: ModuleDefinitionContext): IModuleDefinition {
    const { children } = moduleDefinitionCtx;
    const { length } = children;
    const definitiveIdentification: IDefinitiveObjIdComponent[] = [];
    if (length > 8) {
      const definitiveObjIdComponentList = children.slice(2, length - 8);
      for (let i = 0; i < definitiveObjIdComponentList.length; i += 4) {
        const definitiveName = definitiveObjIdComponentList[i].text;
        const definitiveNumber = Number(definitiveObjIdComponentList[i + 2].text);
        definitiveIdentification.push({definitiveName, definitiveNumber});
      }
    }
    const moduleName = children[0].text;
    const moduleBodyCtx = children[length - 2];
    const definition = moduleBodyCtx.accept(new ModuleBodyVisitor());
    markModuleName(definition, moduleName);
    const moduleDefinition: IModuleDefinition = {moduleName, definition, definitiveIdentification};
    return moduleDefinition;
  }
}

function markModuleName(definition: IModuleBody, moduleName: string): void {
  const assignments = definition.assignments;
  // tslint:disable-next-line: forin
  for (const identifier in assignments) {
    assignments[identifier].moduleName = moduleName;
  }
}
