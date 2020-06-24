import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';

export function unimpl(msg?: string): never {
  if (msg === undefined) {
    throw Error('Not implemented');
  }
  throw Error(`Not implemented\n${msg}`);
}
