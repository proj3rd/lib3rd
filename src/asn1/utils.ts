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
  if (constant in asn1Pool[moduleName].constants) {
    return asn1Pool[moduleName].constants[constant];
  }
  const importedModuleName = asn1Pool[moduleName].imports[constant];
  const importedModule = asn1Pool[importedModuleName];
  return importedModule.constants[constant];
}
