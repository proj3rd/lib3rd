export function ruleName(ctx: any): string {
  if (!ctx.ruleIndex) {
    return null;
  }
  return ctx.parser.ruleNames[ctx.ruleIndex];
}
