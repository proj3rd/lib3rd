"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
var lodash_1 = require("lodash");
var yargs = require("yargs");
var text_1 = require("./text");
var xlsx_1 = require("./xlsx");
var expand_1 = require("../expand");
var parse_1 = require("../parse");
// TODO: need to be place in separate module?
function findMsgIes(msgIeName, asn1) {
    var msgIes = [];
    Object.keys(asn1).forEach(function (moduleName) {
        var assignments = asn1[moduleName].assignments;
        if (msgIeName === 'all') {
            Object.keys(assignments).forEach(function (name) {
                msgIes.push({
                    name: name,
                    definition: assignments[name]
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
                    definition: assignments[msgIeName]
                });
            }
        }
    });
    return msgIes;
}
if (require.main === module) {
    var argv_1 = yargs
        .command('<filePath> <msgIeName>', 'Format <msgIeName> from <filePath>')
        .options({
        format: {
            alias: 'f',
            describe: 'Output format',
            choices: ['txt', 'xlsx'],
            "default": 'txt'
        },
        expand: {
            alias: 'e',
            describe: 'Whether expand sub-IE or not',
            "default": false,
            type: 'boolean'
        }
    })
        .help()
        .argv;
    var _a = argv_1._, filePath_1 = _a[0], msgIeName_1 = _a[1];
    if (!filePath_1 || !msgIeName_1) {
        throw Error('Require at least 2 arguments, filePath, msgIeName, ... and fmt and expand');
    }
    fs_1.readFile(filePath_1, 'utf8', function (err, text) {
        if (err) {
            throw err;
        }
        var formatString = argv_1.format, doExpand = argv_1.expand;
        var asn1Pool = parse_1.parse(text);
        var msgIes = findMsgIes(msgIeName_1, asn1Pool);
        if (!msgIes.length) {
            throw Error(msgIeName_1 + " not found in " + filePath_1);
        }
        if (doExpand) {
            var asn1PoolClone_1 = lodash_1.cloneDeep(asn1Pool);
            var msgIesExpanded = msgIes.map(function (msgIe) {
                return expand_1.expand(msgIe, asn1PoolClone_1);
            });
            msgIes = msgIesExpanded;
        }
        var parsedPath = path_1.parse(filePath_1);
        var fileName = msgIeName_1 + "-" + parsedPath.name + (doExpand ? '-expanded' : '');
        switch (formatString) {
            case 'txt': {
                var formatResult = text_1.format(msgIes);
                fs_1.writeFileSync(fileName + ".txt", formatResult);
                break;
            }
            case 'xlsx': {
                var formatResult = xlsx_1.format(msgIes, asn1Pool /* TODO: formatConfig */);
                formatResult.write(fileName + ".xlsx", function (e, stats) {
                    if (e) {
                        throw e;
                    }
                });
                break;
            }
            default: {
                throw Error("Format '" + formatString + "' not supported");
            }
        }
    });
}
