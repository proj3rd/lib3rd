import { writeFileSync } from 'fs';
import { lowerFirst, upperFirst } from 'lodash';
import { join } from 'path';
import yargs from 'yargs';

function getContextName(ruleName: string): string {
  return `${upperFirst(ruleName)}Context`;
}

function getFileName(ruleName: string): string {
  return `${lowerFirst(ruleName)}Visitor.ts`;
}

function getVisitorName(ruleName: string): string {
  return `${upperFirst(ruleName)}Visitor`;
}

function CreateVisitor(ruleName: string) {
  const contextName = getContextName(ruleName);
  const visitorName = getVisitorName(ruleName);
  const content = `import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from '../../utils/unimpl';
import { ${contextName} } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

/**
 * # Grammar
 * \`\`\`
 * \`\`\`
 */
export class ${visitorName} extends AbstractParseTreeVisitor<ReturnType> implements grammar3rdVisitor<ReturnType> {
  public visitChildren(ctx: ${contextName}): ReturnType {
    return todo();
  }

  protected defaultResult(): ReturnType {
    return unimpl();
  }
}`;
  const srcDirname = __dirname.replace(/\bdist\b/, 'src');
  const fileName = join(srcDirname, getFileName(ruleName));
  writeFileSync(fileName, content);
}

if (require.main === module) {
  // eslint-disable-next-line no-unused-vars
  const { argv } = yargs.command({
    command: 'new <ruleName>',
    handler: (args) => {
      const { ruleName } = args;
      if (typeof ruleName !== 'string') {
        throw Error();
      }
      CreateVisitor(ruleName);
    },
  });
}
