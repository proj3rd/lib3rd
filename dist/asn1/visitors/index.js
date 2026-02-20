"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const lodash_1 = require("lodash");
const path_1 = require("path");
const yargs_1 = __importDefault(require("yargs"));
function getContextName(ruleName) {
    return `${lodash_1.upperFirst(ruleName)}Context`;
}
function getFileName(ruleName) {
    return `${lodash_1.lowerFirst(ruleName)}Visitor.ts`;
}
function getVisitorName(ruleName) {
    return `${lodash_1.upperFirst(ruleName)}Visitor`;
}
function CreateVisitor(ruleName) {
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
    const fileName = path_1.join(srcDirname, getFileName(ruleName));
    fs_1.writeFileSync(fileName, content);
}
if (require.main === module) {
    // eslint-disable-next-line no-unused-vars
    const { argv } = yargs_1.default.command({
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
//# sourceMappingURL=index.js.map