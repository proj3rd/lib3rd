import { ParseTree } from 'antlr4ts/tree/ParseTree';
import * as colors from 'colors';
import { log } from '../utils/logging';

import { AsnType } from './classes/asnType';
import { ObjectClass } from './classes/objectClass';
import { ObjectSet } from './classes/objectSet';
import { BuiltinValue } from './visitors/builtinValue';
import { IModules } from './visitors/modules';

export function getLogWithAsn1(ctx: ParseTree, prefix: string = '', postfix: string = '', length: number = 80): string {
  const asn1Length = length - prefix.length - postfix.length;
  return [prefix, ctx.text.substring(0, asn1Length), postfix].join(' ').trim();
}

export function findConstantValue(constant: string, moduleName: string, asn1Pool: IModules): BuiltinValue {
  if (moduleName in asn1Pool) {
    if (constant in asn1Pool[moduleName].constants) {
      return asn1Pool[moduleName].constants[constant];
    }
    if (constant in asn1Pool[moduleName].imports) {
      const importedModuleName = asn1Pool[moduleName].imports[constant];
      if (importedModuleName in asn1Pool) {
        const importedModule = asn1Pool[importedModuleName];
        if (constant in importedModule.constants) {
          return importedModule.constants[constant];
        }
      }
    }
  }
  log.warn(`Cannot find a reference ${constant} in a module ${moduleName}`);
  return undefined;
}

export function findDefinition(typeName: string, moduleName: string, asn1Pool: IModules)
    : AsnType | ObjectClass | ObjectSet {
  console.log(colors.blue(__filename), 'findDefinition()');
  console.log(`Looking for ${typeName} in ${moduleName}...`);
  const definition = findDefinitionHelper(typeName, moduleName, asn1Pool);
  if (definition) {
    console.log(colors.yellow('IE found'), `(type: ${definition.constructor.name})`);
    console.log(JSON.stringify(definition, null, 2));
    return definition;
  }
  console.log(colors.red('Fallback to exhaustive search'));
  // tslint:disable-next-line: forin
  for (const moduleNameFallback in asn1Pool) {
    const definitionFallback = findDefinitionHelper(typeName, moduleNameFallback, asn1Pool);
    if (definitionFallback) {
      console.log(colors.yellow('IE found'), `(type: ${definitionFallback.constructor.name})`);
      console.log(JSON.stringify(definitionFallback, null, 2));
      return definitionFallback;
    }
  }
  console.log(colors.red(`Cannot find ${typeName} in ${moduleName}`));
  return undefined;
}

function findDefinitionHelper(typeName: string, moduleName: string, asn1Pool: IModules)
    : AsnType | ObjectClass | ObjectSet {
  if (moduleName in asn1Pool) {
    if (typeName in asn1Pool[moduleName].assignments) {
      return asn1Pool[moduleName].assignments[typeName];
    }
    if (typeName in asn1Pool[moduleName].imports) {
      const importedModuleName = asn1Pool[moduleName].imports[typeName];
      if (importedModuleName in asn1Pool) {
        const importedModule = asn1Pool[importedModuleName];
        if (typeName in importedModule.assignments) {
          return importedModule.assignments[typeName];
        }
      }
    }
  }
}

export function sanitizeAsn1(asn1: string): string {
  // Removes comments which are not a Need tag neither a Cond tag
  // Gives one space before a Need tag and a Cond tag
  return asn1.replace(/--(?!.*(Need|Cond)).*$/gm, '')
             .replace(/(--\s*?(Need|Cond).*?)$/gm, ' $1')
             .replace(/,\.\.\./gm, ', ...');
}
