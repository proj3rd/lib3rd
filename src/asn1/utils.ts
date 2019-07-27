import { log } from '../utils/logging';

import { Base } from './classes/base';

export function getContextName(ctx: any): string {
  if ('ruleIndex' in ctx) {
    return ctx.parser.ruleNames[ctx.ruleIndex];
  }
  return null;
}

export function getLogWithAsn1(ctx: any, prefix: string = '', postfix: string = '', length: number = 80): string {
  const asn1Length = length - prefix.length - postfix.length;
  return [prefix, ctx.getText().substring(0, asn1Length), postfix].join(' ').trim();
}

export function findConstantValue(constant: string, moduleName: string, asn1Pool: any): string {
  return findReference(constant, moduleName, asn1Pool, 'constants');
}

export function findDefinition(typeName: string, moduleName: string, asn1Pool: any): Base {
  return findReference(typeName, moduleName, asn1Pool, 'assignments');
}

function findReference<T>(refName: string, moduleName: string, asn1Pool: any, key: 'constants' | 'assignments'): T {
  if (refName in asn1Pool[moduleName][key]) {
    return asn1Pool[moduleName][key][refName];
  }
  if (refName in asn1Pool[moduleName].imports) {
    const importedModuleName = asn1Pool[moduleName].imports[refName];
    const importedModule = asn1Pool[importedModuleName];
    return importedModule[key][refName];
  }
  log.warn(`Cannot find a reference ${refName} in a module ${moduleName}`);
  return null;
}

export function sanitizeAsn1(asn1: string): string {
  // Removes comments which are not a Need tag neither a Cond tag
  // Gives one space before a Need tag and a Cond tag
  return asn1.replace(/--(?!.*(Need|Cond)).*$/gm, '')
             .replace(/(--\s*?(Need|Cond).*?)$/gm, ' $1');
}
