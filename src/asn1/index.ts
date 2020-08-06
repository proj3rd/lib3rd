import { readFileSync, writeFileSync } from 'fs';
import { parse as parsePath } from 'path';
import { todo } from 'unimpl';
import yargs from 'yargs';
import { diff, renderDiff } from './diff';
import { parse } from './parser';

export { extract } from './extractor';
export { parse } from './parser';

/**
 * Normalize ASN.1 definition with the followings:
 * - Move a tag in a separate line to inline
 * - Remove an inline comment
 * - Remove a line comment
 * - Trim whitespaces
 */
export function normalize(asn1: string): string {
  return asn1
    .replace(/\n\s*?(--\s*?(Need|Cond)\s+?.+?)$/gm, '$1')
    .replace(/--.*?--/gm, '')
    .replace(/^\s*?--.*?$/gm, '')
    .trim();
}

if (require.main === module) {
  const { argv } = yargs.command({
    command: 'diff <file1> <file2>',
    handler: (args) => {
      const { file1, file2 } = args;
      if (typeof file1 !== 'string' || typeof file2 !== 'string') {
        throw Error();
      }
      const { base: specOld } = parsePath(file1);
      const { base: specNew } = parsePath(file2);
      const asn1 = readFileSync(file1, 'utf8');
      const asn2 = readFileSync(file2, 'utf8');
      const modules1 = parse(asn1);
      const modules2 = parse(asn2);
      const patchList = diff(modules1, modules2);
      const rendered = renderDiff({ specOld, specNew, patchList });
      const path = `diff_${specOld}_${specNew}.html`;
      writeFileSync(path, rendered);
    },
  });
}
