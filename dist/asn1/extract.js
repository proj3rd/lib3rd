"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var tokens = {
    RRC: {
        start: /^-- ASN1START/gm,
        end: /^-- ASN1STOP/gm
    }
};
function extract(text, protocol) {
    protocol = protocol.toUpperCase();
    var extractedTexts = [];
    while (true) {
        var matchStart = tokens[protocol].start.exec(text);
        if (!matchStart) {
            break;
        }
        tokens[protocol].end.lastIndex = matchStart.index;
        var matchEnd = tokens[protocol].end.exec(text);
        if (!matchEnd) {
            throw Error('Start token is found but end token is not');
        }
        extractedTexts.push(text.substring(matchStart.index + matchStart[0].length, matchEnd.index));
    }
    return extractedTexts.join('');
}
exports.extract = extract;
if (require.main === module) {
    var _a = process.argv.slice(2), protocol_1 = _a[0], filePath = _a[1];
    if (!protocol_1 || !filePath) {
        throw Error('Requires 2 arguments, protocol and filePath');
    }
    fs_1.readFile(filePath, 'utf8', function (err, text) {
        if (err) {
            throw err;
        }
        process.stdout.write(extract(text, protocol_1) + '\n');
    });
}
