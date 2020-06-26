import { readFileSync, writeFileSync } from 'fs';
import { parse } from './parser';

const RE_START_OF_LINE = /^/gm;

export function indent(text: string, tabSize: number = 4): string {
  return text.replace(RE_START_OF_LINE, ' '.repeat(tabSize));
}

describe('Format Modules [format_all]', function () {
  this.timeout(0);

  // tslint:disable-next-line: only-arrow-functions
  it('LTE RRC (36331) [format_36331]', function () {
    const asn1 = readFileSync('resources/36331-g00.asn1', 'utf8');
    const modules = parse(asn1);
    const formatted = modules.toString();
    writeFileSync('36331-g00.asn1', formatted);
  });

  // tslint:disable-next-line: only-arrow-functions
  it('NR RRC (38331) [format_38331]', function () {
    const asn1 = readFileSync('resources/38331-g00.asn1', 'utf8');
    const modules = parse(asn1);
    const formatted = modules.toString();
    writeFileSync('38331-g00.asn1', formatted);
  });
});
