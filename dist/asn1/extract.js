"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const text_1 = require("../utils/text");
const utils_1 = require("./utils");
const tokens = {
    RRC: {
        start: /^-- ASN1START/gm,
        end: /^-- ASN1STOP/gm,
    },
};
/**
 * Extract ASN.1 from text
 * @param text Text containing ASN.1 encoded in UTF-8
 * @param protocol Protocol name, case-insensitive. Only `RRC` protocol is supported currently
 * @returns Text containing only ASN.1 encoded in UTF-8
 */
function extract(text, protocol) {
    protocol = protocol.toUpperCase();
    if (!tokens[protocol]) {
        throw Error('Protocol is not supported');
    }
    const extractedTexts = [];
    while (true) {
        const matchStart = tokens[protocol].start.exec(text);
        if (!matchStart) {
            break;
        }
        tokens[protocol].end.lastIndex = matchStart.index;
        const matchEnd = tokens[protocol].end.exec(text);
        if (!matchEnd) {
            throw Error('Start token is found but end token is not');
        }
        extractedTexts.push(text.substring(matchStart.index + matchStart[0].length, matchEnd.index));
    }
    return text_1.sanitize(utils_1.sanitizeAsn1(extractedTexts.join('')));
}
exports.extract = extract;
if (require.main === module) {
    const [protocol, filePath] = process.argv.slice(2);
    if (!protocol || !filePath) {
        throw Error('Requires 2 arguments, protocol and filePath');
    }
    fs_1.readFile(filePath, 'utf8', (err, text) => {
        if (err) {
            throw err;
        }
        process.stdout.write(extract(text, protocol));
    });
}
