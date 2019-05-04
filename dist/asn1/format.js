"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var parse_1 = require("./parse");
/**
 * Format ASN.1
 * @param asn1 ASN.1 object you want to format
 * @param fmt Format you want to get. `txt` (default) is supported currently
 */
function format(msgIeName, asn1, fmt) {
    if (fmt === void 0) { fmt = 'txt'; }
    switch (fmt) {
        case 'txt': {
            return msgIeName + " ::= " + asn1.toString();
            break;
        }
        default: {
            throw Error("Format '" + fmt + "' not supported");
        }
    }
}
exports.format = format;
if (require.main === module) {
    var _a = process.argv.slice(2), filePath_1 = _a[0], msgIeName_1 = _a[1], fmt_1 = _a[2], expand = _a[3];
    if (!filePath_1 || !msgIeName_1) {
        throw Error('Require at least 2 arguments, filePath, msgIeName, ... and fmt and expand');
    }
    fs_1.readFile(filePath_1, 'utf8', function (err, text) {
        if (err) {
            throw err;
        }
        var parseResult = parse_1.parse(text);
        var msgIeDefinition = null;
        Object.keys(parseResult).forEach(function (moduleName) {
            if (msgIeDefinition) {
                return;
            }
            if (msgIeName_1 in parseResult[moduleName].assignments) {
                msgIeDefinition = parseResult[moduleName].assignments[msgIeName_1];
            }
        });
        if (!msgIeDefinition) {
            throw Error(msgIeName_1 + " not found in " + filePath_1);
        }
        var formatResult = format(msgIeDefinition, fmt_1 ? fmt_1 : 'txt');
        // TODO: write to file?
    });
}
