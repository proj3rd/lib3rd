"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const text_1 = require("../utils/text");
const utils_1 = require("./utils");
const tokens = {
    RRC: {
        start: /^--\s*?ASN1START.*?$/gm,
        end: /^--\s*?ASN1STOP.*?$/gm,
    },
    RAN3: {
        start: /^--\s*?\*+$/gm,
        end: /^\bEND\b\s*?$/gm,
    },
};
/**
 * Extract ASN.1 from text
 * @param text Text containing ASN.1 encoded in UTF-8
 * @returns Text containing only ASN.1 encoded in UTF-8
 */
function extract(text) {
    const protocol = text.match(tokens.RRC.start) ? 'RRC' :
        text.match(tokens.RAN3.start) ? 'RAN3' : undefined;
    if (!protocol) {
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
        tokens[protocol].start.lastIndex = matchEnd.index;
        extractedTexts.push(text.substring(matchStart.index + matchStart[0].length, matchEnd.index + matchEnd[0].length));
    }
    return text_1.sanitize(utils_1.sanitizeAsn1(extractedTexts.join('')));
}
exports.extract = extract;
if (require.main === module) {
    const filePath = process.argv[2];
    if (!filePath) {
        throw Error('Requires filePath');
    }
    fs_1.readFile(filePath, 'utf8', (err, text) => {
        if (err) {
            throw err;
        }
        process.stdout.write(extract(text));
    });
}
