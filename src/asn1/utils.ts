export function getContextName(ctx: any): string {
  if ('ruleIndex' in ctx) {
    return ctx.parser.ruleNames[ctx.ruleIndex];
  }
  return null;
}
