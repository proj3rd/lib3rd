"use strict";
exports.__esModule = true;
/**
 * Cleanup text
 * @param text Text which needs cleanup
 *
 * Following cleanup is supported
 * - Remove `\uFFFd` (Unicode REPLACEMENT CHARACTER)
 * - Convert `\u3000` (Unicode IDEOGRAPHIC SPACE) into normal space
 */
function sanitize(text) {
    // \uFFFD: Unicode REPLACEMENT CHARACTER
    return text.replace(/\uFFFD/g, '')
        // \u3000: Unicode IDEOGRAPHIC SPACE
        .replace(/\u3000/g, ' ');
}
exports.sanitize = sanitize;
