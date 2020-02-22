import { ParseTree } from 'antlr4ts/tree/ParseTree';

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
  log.warn(`Cannot find a reference ${typeName} in a module ${moduleName}`);
  return undefined;
}

export function sanitizeAsn1(asn1: string): string {
  // Removes comments which are not a Need tag neither a Cond tag
  // Gives one space before a Need tag and a Cond tag
  return asn1.replace(/--(?!.*(Need|Cond)).*$/gm, '')
             .replace(/(--\s*?(Need|Cond).*?)$/gm, ' $1')
             .replace(/,\.\.\./gm, ', ...');
}
