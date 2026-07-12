import { readFileSync } from 'fs';

/**
 * Regular expression for section number. Following expressions are supported
 * - 9.1.2.3
 * - 9.1.2.3a
 * - A.1.2.3
 * - A.1.2.3a
 */
export const reSectionNumber = /\b[1-9A-Z]\d*?(\.[1-9]\d*?)*\.[1-9]\w*?\b/;
//                         ^ Head      ^ Middle        ^ Tail

if (require.main === module) {
  const { argv } = process;
  const file = argv[2];
  if (file === undefined) {
    throw Error();
  }
  const html = readFileSync(file, 'utf8');
  const parsed = parse(html);
  process.stdout.write(JSON.stringify(parsed, null, 2));
}
