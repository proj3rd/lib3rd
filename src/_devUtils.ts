export function unimpl(msg?: string): never {
  if (msg === undefined) {
    throw Error('Not implemented');
  }
  throw Error(`Not implemented\n${msg}`);
}
