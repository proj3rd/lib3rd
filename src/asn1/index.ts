import { readFileSync, writeFileSync } from 'fs';
import { cloneDeep } from 'lodash';
import { parse as parsePath } from 'path';
import yargs from 'yargs';
import { ValueAssignment } from './classes/valueAssignment';
import { diff, renderDiff } from './diff';
import { extract } from './extractor';
import { parse } from './parser';

export { diff, renderDiff } from './diff';
export { extract } from './extractor';
export { parse } from './parser';

/**
 * Normalize ASN.1 definition with the followings:
 * - Move a tag in a separate line to inline
 * - Add a space before a tag
 * - Remove an inline comment
 * - Remove a line comment
 * - Remove a comment after a version bracket
 * - Remove a comment after a curly brace
 * - Add a space after a comman (e.g. `,...` to `, ...`)
 * - Fix an idiographic space (U+3000)
 * - Fix a replacement character (U+FFFD)
 * - Fix a no-break space (U+00A0)
 * - Trim whitespaces
 */
export function normalize(asn1: string): string {
  return asn1
    .replace(/\n\s*?(--\s*?(Need|Cond)\s+?.+?)$/gm, '$1')
    .replace(/(--\s*?(Need|Cond)\s+?.+?)$/gm, ' $1')
    .replace(/--.*?--/gm, '')
    .replace(/^\s*?--.*?$/gm, '')
    .replace(/\[\[[\t ]*?--.*?$/gm, '[[')
    .replace(/\{[\t ]*?--.*?$/gm, '{')
    .replace(/,/g, ', ')
    .replace(/\u3000/g, ' ')
    .replace(/\uFFFD/g, ' ')
    .replace(/\u00A0/g, ' ')
    .trim();
}

if (require.main === module) {
  const { argv } = yargs
    .command({
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
        const modules1 = parse(normalize(asn1));
        const modules2 = parse(normalize(asn2));
        const patchList = diff(modules1, modules2);
        const template = readFileSync(`${__dirname}/../../resources/diff.pug`, 'utf8');
        const rendered = renderDiff({ specOld, specNew, patchList }, template);
        const path = `diff_${specOld}_${specNew}.html`;
        writeFileSync(path, rendered);
      },
    })
    .command({
      command: 'expand <file> <name>',
      handler: (args) => {
        const { file, name } = args;
        if (typeof file !== 'string') {
          throw Error();
        }
        if (typeof name !== 'string') {
          throw Error();
        }
        const text = readFileSync(file, 'utf8');
        const parsed = parse(normalize(text));
        const assignment = parsed.findAssignment(name);
        if (assignment === undefined) {
          throw Error(`${name} not found in ${file}`);
        }
        const expanded = assignment.expand(parsed);
        process.stdout.write(expanded.toString());
      },
    })
    .command({
      command: 'extract <file>',
      handler: (args) => {
        const { file } = args;
        if (typeof file !== 'string') {
          throw Error();
        }
        const { name: spec } = parsePath(file);
        const text = readFileSync(file, 'utf8');
        const extracted = extract(text);
        const path = `${spec}.asn1`;
        writeFileSync(path, extracted);
      },
    })
    .command({
      command: 'format <file> <name>',
      builder: (args) => {
        return args.options({
          f: {
            alias: 'format',
            choices: ['text', 'xlsx'],
            default: 'text',
          },
          e: {
            alias: 'expand',
            default: false,
            type: 'boolean',
          },
        });
      },
      handler: (args) => {
        const { file, name, format, expand } = args;
        if (
          typeof file !== 'string' ||
          typeof name !== 'string' ||
          typeof format !== 'string' ||
          typeof expand !== 'boolean'
        ) {
          throw Error();
        }
        const text = readFileSync(file, 'utf8');
        const parsed = parse(text);
        const assignment = parsed.findAssignment(name);
        if (assignment === undefined) {
          throw Error(`${name} not found in ${file}`);
        }
        if (
          assignment instanceof ValueAssignment &&
          format === 'xlsx' &&
          expand
        ) {
          throw Error();
        }
        const assignmentNew = expand
          ? cloneDeep(assignment).expand(parsed)
          : assignment;
        if (format === 'text') {
          process.stdout.write(assignmentNew.toString());
        } else {
          if (assignmentNew instanceof ValueAssignment) {
            throw Error();
          }
          const wb = assignmentNew.toSpreadsheet();
          const { base } = parsePath(file);
          const arrToFilename = [name, base, expand ? 'expand' : ''];
          wb.xlsx.writeFile(`${arrToFilename.join('_')}.xlsx`);
        }
      },
    })
    .command({
      command: 'parse <file>',
      handler: (args) => {
        const { file } = args;
        if (typeof file !== 'string') {
          throw Error();
        }
        const { name: spec } = parsePath(file);
        const text = readFileSync(file, 'utf8');
        const parsed = parse(normalize(text));
      },
    });
}
