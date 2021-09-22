"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.versionFromCharacters = exports.seriesFromSpecNumbering = void 0;
function seriesFromSpecNumbering(specNumbering) {
    return specNumbering.split('.')[0];
}
exports.seriesFromSpecNumbering = seriesFromSpecNumbering;
function versionFromCharacters(chars) {
    const step = chars.length === 3 ? 1 : /* chars.length === 6 */ 2;
    const version = [];
    for (let i = 0; i < 3; i += 1) {
        const charsField = chars.substring(i * step, i * step + step);
        if (charsField.length === 1) {
            if (charsField < 'a') {
                version.push(+charsField);
            }
            else {
                version.push(10 + charsField.charCodeAt(0) - 'a'.charCodeAt(0));
            }
        }
        else {
            // charsField.length === 2
            version.push(+charsField);
        }
    }
    return version;
}
exports.versionFromCharacters = versionFromCharacters;
//# sourceMappingURL=numbering.js.map