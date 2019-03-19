"use strict";
exports.__esModule = true;
var tokens = {
    rrc: {
        start: /^-- ASN1START/gm,
        end: /^-- ASN1STOP/gm
    }
};
function extract(text, protocol) {
    var extractedTexts = [];
    while (true) {
        var matchStart = tokens[protocol].start.exec(text);
        if (matchStart === null) {
            break;
        }
        var matchEnd = tokens[protocol].end.exec(text);
        if (matchEnd === null) {
            // Unexpected case: start token is found but end token is not
            return null;
        }
        extractedTexts.push(text.substring(matchStart.index + matchStart[0].length, matchEnd.index));
    }
    return extractedTexts.join('');
}
exports.extract = extract;
