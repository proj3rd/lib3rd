"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const lodash_1 = require("lodash");
const path_1 = require("path");
const yargs_1 = __importDefault(require("yargs"));
function createClass(classname) {
    const tagname = `${lodash_1.lowerFirst(classname)}Tag`;
    const content = `export class ${classname} {
  private ${tagname}: undefined;
}
`;
    const srcDirname = __dirname.replace(/\bdist\b/, 'src');
    const filename = path_1.join(srcDirname, getFilename(classname));
    fs_1.writeFileSync(filename, content);
}
function getFilename(classname) {
    return `${lodash_1.lowerFirst(classname)}.ts`;
}
if (require.main === module) {
    const { argv } = yargs_1.default.command({
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
//# sourceMappingURL=index.js.map