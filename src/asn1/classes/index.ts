import { writeFileSync } from 'fs';
import { lowerFirst } from 'lodash';
import { join } from 'path';
import yargs from 'yargs';

function getFilename(classname: string): string {
  return `${lowerFirst(classname)}.ts`;
}

function createClass(classname: string) {
  const tagname = `${lowerFirst(classname)}Tag`;
  const content = `export class ${classname} {
  private ${tagname}: undefined;
}
`;
  const srcDirname = __dirname.replace(/\bdist\b/, 'src');
  const filename = join(srcDirname, getFilename(classname));
  writeFileSync(filename, content);
}

if (require.main === module) {
  // eslint-disable-next-line no-unused-vars
  const { argv } = yargs.command({
    command: 'new <classname>',
    handler: (args) => {
      const { classname } = args;
      if (typeof classname !== 'string') {
        throw Error();
      }
      createClass(classname);
    },
  });
}
