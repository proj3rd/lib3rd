"use strict";
exports.__esModule = true;
function sanitize(text) {
    // \uFFFD: Unicode REPLACEMENT CHARACTER
    return text.replace(/\uFFFD/g, '')
        // \u3000: Unicode IDEOGRAPHIC SPACE
        .replace(/\u3000/g, ' ');
}
exports.sanitize = sanitize;
