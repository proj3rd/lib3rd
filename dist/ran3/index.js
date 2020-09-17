"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const lodash_1 = require("lodash");
const path_1 = require("path");
const yargs_1 = __importDefault(require("yargs"));
const parse_1 = require("./parse");
exports.parse = parse_1.parse;
if (require.main === module) {
    const { argv } = yargs_1.default
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
            if (typeof file !== 'string' ||
                typeof name !== 'string' ||
                typeof expand !== 'boolean') {
                throw Error();
            }
            const html = fs_1.readFileSync(file, 'utf8');
            const parsed = parse_1.parse(html);
            const definition = parsed.findDefinition(name);
            if (definition === undefined) {
                throw Error(`${name} not found in ${file}`);
            }
            const definitionNew = expand
                ? lodash_1.cloneDeep(definition).expand(parsed)
                : definition;
            const wb = definitionNew.toSpreadsheet();
            const { base } = path_1.parse(file);
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
            const { name: spec } = path_1.parse(file);
            const html = fs_1.readFileSync(file, 'utf8');
            const parsed = parse_1.parse(html);
            process.stdout.write(JSON.stringify(parsed, null, 2));
        },
    });
}
//# sourceMappingURL=index.js.map