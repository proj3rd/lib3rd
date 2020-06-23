import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';

export function unimpl(ctx?: ParserRuleContext): never {
  if (ctx === undefined) {
    throw Error('Not implemented');
  }
  throw Error(`Not implemented\n${ctx.text}`);
}
