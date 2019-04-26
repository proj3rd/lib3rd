import { log } from '../utils/logging';

export function getContextName(ctx: any): string {
  if ('ruleIndex' in ctx) {
    return ctx.parser.ruleNames[ctx.ruleIndex];
  }
  return null;
}

export function warnNotSupportedAsn1(ctx: any): void {
  log.warn(`Not supported ASN.1:`, ctx.getText().substring(0, 48));
}
