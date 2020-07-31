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

function CreateVisitor(ruleName: string) {
  const contextName = getContextName(ruleName);
  const visitorName = getVisitorName(ruleName);
  const content = `import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import { ${contextName} } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

/**
 * # Grammar
 * \`\`\`
 * \`\`\`
 */
export class ${visitorName} extends AbstractParseTreeVisitor<ReturnType> implements ASN_3gppVisitor<ReturnType> {
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

function getVisitorName(ruleName: string): string {
  return `${upperFirst(ruleName)}Visitor`;
}

if (require.main === module) {
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
