"use strict";
exports.__esModule = true;
/*
 * Version Numbering Scheme
 *  http://www.3gpp.org/specifications/specification-numbering/81-version-numbering-scheme
 */
function versionFromString(str) {
    if (str.length === 3) {
        return {
            major: numberFromAlpha(str[0]),
            technical: numberFromAlpha(str[1]),
            editorial: numberFromAlpha(str[2])
        };
    }
    else if (str.length === 6) {
        return {
            major: parseInt(str.substring(0, 2), 10),
            technical: parseInt(str.substring(2, 4), 10),
            editorial: parseInt(str.substring(4, 6), 10)
        };
    }
    throw Error("Malformed version string (" + str + ")");
}
exports.versionFromString = versionFromString;
function numberFromAlpha(char) {
    if (isNaN(parseInt(char, 10))) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0) + 10;
    }
    else {
        return parseInt(char, 10);
    }
}
function seriesFromString(specNumStr) {
    return specNumStr.split('.')[0];
}
exports.seriesFromString = seriesFromString;
