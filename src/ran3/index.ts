import { readFileSync, writeFileSync } from 'fs';
import { cloneDeep } from 'lodash';
import { parse as parsePath } from 'path';
import yargs from 'yargs';
import { Definitions } from './classes/definitions';
import { parse } from './parse';

export { parse };

if (require.main === module) {
  // eslint-disable-next-line no-unused-vars
  const { argv } = yargs
    .command({
      command: 'format <file> <name>',
      builder: (args) => args.options({
        e: {
          alias: 'expand',
          default: false,
          type: 'boolean',
        },
      }),
      handler: (args) => {
        const { file, name, expand } = args;
        if (
          typeof file !== 'string'
          || typeof name !== 'string'
          || typeof expand !== 'boolean'
        ) {
          throw Error();
        }
        const html = readFileSync(file, 'utf8');
        const parsed = parse(html);
        const definition = parsed.findDefinition(name);
        if (definition === undefined) {
          throw Error(`${name} not found in ${file}`);
        }
        const definitionNew = expand
          ? cloneDeep(definition).expand(parsed)
          : definition;
        const wb = definitionNew.toSpreadsheet();
        const { base } = parsePath(file);
        const arrToFilename = [name, base, expand ? 'expand' : ''];
        wb.xlsx.writeFile(`${arrToFilename.join('_')}.xlsx`);
      },
    })
    .command({
      command: 'parse <file>',
      handler: (args) => {
        const { file } = args;
        if (typeof file !== 'string') {
          throw Error();
        }
        const html = readFileSync(file, 'utf8');
        const parsed = parse(html);
        process.stdout.write(JSON.stringify(parsed, null, 2));
      },
    })
    .command({
      command: 'serialize <file>',
      handler: (args) => {
        const { file } = args;
        if (typeof file !== 'string') {
          throw Error();
        }
        const html = readFileSync(file, 'utf8');
        const parsed = parse(html);
        writeFileSync(`${file}.json`, JSON.stringify(parsed));
      },
    })
    .command({
      command: 'deserialize <file>',
      handler: (args) => {
        const { file } = args;
        if (typeof file !== 'string') {
          throw Error();
        }
        const serialized = readFileSync(file, 'utf8');
        const obj = JSON.parse(serialized);
        Definitions.fromObject(obj);
      },
    });
}
