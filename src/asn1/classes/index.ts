import { writeFileSync } from 'fs';
import { lowerFirst } from 'lodash';
import { join } from 'path';
import yargs from 'yargs';

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

function getFilename(classname: string): string {
  return `${lowerFirst(classname)}.ts`;
}

if (require.main === module) {
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
