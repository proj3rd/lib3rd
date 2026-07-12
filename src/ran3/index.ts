import { readFileSync } from 'fs';
import yargs from 'yargs';
import { Definitions } from './classes/definitions';
import { parse } from './parse';

export { parse };

if (require.main === module) {
  // eslint-disable-next-line no-unused-vars
  const { argv } = yargs
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
