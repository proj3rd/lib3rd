"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const fs_1 = require("fs");
const lodash_1 = require("lodash");
const path_1 = require("path");
const yargs_1 = __importDefault(require("yargs"));
const definitions_1 = require("./classes/definitions");
const parse_1 = require("./parse");
Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return parse_1.parse; } });
if (require.main === module) {
    // eslint-disable-next-line no-unused-vars
    const { argv } = yargs_1.default
        .command({
        command: 'format <file> <name>',
        builder: (args) => args.options({
            e: {
                alias: 'expand',
                default: false,
                type: 'boolean',
            },
        }),
        handler: (args) => {
            const { file, name, expand } = args;
            if (typeof file !== 'string'
                || typeof name !== 'string'
                || typeof expand !== 'boolean') {
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
            const html = fs_1.readFileSync(file, 'utf8');
            const parsed = parse_1.parse(html);
            process.stdout.write(JSON.stringify(parsed, null, 2));
        },
    })
        .command({
        command: 'serialize <file>',
        handler: (args) => {
            const { file } = args;
            if (typeof file !== 'string') {
                throw Error();
            }
            const html = fs_1.readFileSync(file, 'utf8');
            const parsed = parse_1.parse(html);
            fs_1.writeFileSync(`${file}.json`, JSON.stringify(parsed));
        },
    })
        .command({
        command: 'deserialize <file>',
        handler: (args) => {
            const { file } = args;
            if (typeof file !== 'string') {
                throw Error();
            }
            const serialized = fs_1.readFileSync(file, 'utf8');
            definitions_1.Definitions.deserialize(serialized);
        },
    });
}
//# sourceMappingURL=index.js.map