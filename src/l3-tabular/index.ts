import { readFileSync } from 'fs';
import yargs from 'yargs';
import { parse } from './parse';

export { parse };

if (require.main === module) {
  // eslint-disable-next-line no-unused-vars
  const { argv } = yargs
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
    });
}
