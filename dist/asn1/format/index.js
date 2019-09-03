"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const lodash_1 = require("lodash");
const yargs = require("yargs");
const text_1 = require("./text");
exports.formatTxt = text_1.format;
const xlsx_1 = require("./xlsx");
exports.formatXlsx = xlsx_1.format;
const expand_1 = require("../expand");
const parse_1 = require("../parse");
// TODO: need to be place in separate module?
function findMsgIes(msgIeName, asn1Pool) {
    const msgIes = [];
    Object.keys(asn1Pool).forEach((moduleName) => {
        const assignments = asn1Pool[moduleName].assignments;
        if (msgIeName === 'all') {
            Object.keys(assignments).forEach((name) => {
                msgIes.push({
                    name,
                    definition: assignments[name],
                });
            });
        }
        else {
            if (msgIes.length) {
                return;
            }
            if (msgIeName in assignments) {
                msgIes.push({
                    name: msgIeName,
                    definition: assignments[msgIeName],
                });
            }
        }
    });
    return msgIes;
}
exports.findMsgIes = findMsgIes;
if (require.main === module) {
    const argv = yargs
        .command('<filePath> <msgIeName>', 'Format <msgIeName> from <filePath>')
        .options({
        format: {
            alias: 'f',
            describe: 'Output format',
            choices: ['txt', 'xlsx'],
            default: 'txt',
        },
        expand: {
            alias: 'e',
            describe: 'Whether expand sub-IE or not',
            default: false,
            type: 'boolean',
        },
    })
        .help()
        .argv;
    const [filePath, msgIeName] = argv._;
    if (!filePath || !msgIeName) {
        throw Error('Require at least 2 arguments, filePath, msgIeName, ... and fmt and expand');
    }
    fs_1.readFile(filePath, 'utf8', (err, text) => {
        if (err) {
            throw err;
        }
        const { format: formatString, expand: doExpand } = argv;
        const asn1Pool = parse_1.parse(text);
        let msgIes = findMsgIes(msgIeName, asn1Pool);
        if (!msgIes.length) {
            throw Error(`${msgIeName} not found in ${filePath}`);
        }
        if (doExpand) {
            const asn1PoolClone = lodash_1.cloneDeep(asn1Pool);
            const msgIesExpanded = msgIes.map((msgIe) => {
                return expand_1.expand(msgIe, asn1PoolClone);
            });
            msgIes = msgIesExpanded;
        }
        const parsedPath = path_1.parse(filePath);
        const fileName = `${msgIeName}-${parsedPath.name}${doExpand ? '-expanded' : ''}`;
        switch (formatString) {
            case 'txt': {
                const formatResult = text_1.format(msgIes);
                fs_1.writeFileSync(`${fileName}.txt`, formatResult);
                break;
            }
            case 'xlsx': {
                const formatResult = xlsx_1.format(msgIes, asn1Pool /* TODO: formatConfig */);
                formatResult.write(`${fileName}.xlsx`, (e, stats) => {
                    if (e) {
                        throw e;
                    }
                });
                break;
            }
            default: {
                throw Error(`Format '${formatString}' not supported`);
            }
        }
    });
}
