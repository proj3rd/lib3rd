"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
var text_1 = require("./text");
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
    var _a = process.argv.slice(2), filePath_1 = _a[0], msgIeName_1 = _a[1];
    if (!filePath_1 || !msgIeName_1) {
        throw Error('Require at least 2 arguments, filePath, msgIeName, ... and fmt and expand');
    }
    fs_1.readFile(filePath_1, 'utf8', function (err, text) {
        if (err) {
            throw err;
        }
        var _a = process.argv.slice(4), fmt = _a[0], expand = _a[1];
        fmt = fmt ? fmt : 'txt';
        expand = expand ? expand : null;
        var parseResult = parse_1.parse(text);
        var msgIes = findMsgIes(msgIeName_1, parseResult);
        if (!msgIes.length) {
            throw Error(msgIeName_1 + " not found in " + filePath_1);
        }
        // TODO: expand
        var parsedPath = path_1.parse(filePath_1);
        switch (fmt) {
            case 'txt': {
                var formatResult = text_1.format(msgIes);
                fs_1.writeFileSync(msgIeName_1 + "-" + parsedPath.name + ".txt", formatResult);
                break;
            }
            default: {
                throw Error("Format '" + fmt + "' not supported");
            }
        }
    });
}
