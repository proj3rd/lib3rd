import { readFileSync } from 'fs';
import { parse as parsePath } from 'path';
import { todo } from 'unimpl';
import yargs from 'yargs';
import { parse } from './parse';

export { parse };

if (require.main === module) {
  const { argv } = yargs
    .command({
      command: 'format <file> <name>',
      builder: (args) => {
        return args.options({
          e: {
            alias: 'expand',
            default: false,
            type: 'boolean',
          },
        });
      },
      handler: (args) => {
        const { file, name, expand } = args;
        if (
          typeof file !== 'string' ||
          typeof name !== 'string' ||
          typeof expand !== 'boolean'
        ) {
          throw Error();
        }
        const html = readFileSync(file, 'utf8');
        const parsed = parse(html);
        const definition = parsed.findDefinition(name);
        if (definition === undefined) {
          throw Error(`${name} not found in ${file}`);
        }
        const definitionNew = expand ? todo() : definition;
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
        const { name: spec } = parsePath(file);
        const html = readFileSync(file, 'utf8');
        const parsed = parse(html);
        process.stdout.write(JSON.stringify(parsed, null, 2));
      },
    });
}
