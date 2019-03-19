"use strict";
exports.__esModule = true;
/*
 * Version Numbering Scheme
 * http://www.3gpp.org/specifications/specification-numbering/81-version-numbering-scheme
 */
function versionFromString(versionStr) {
    if (versionStr.length === 3) {
        return {
            major: numberFromAlpha(versionStr[0]),
            technical: numberFromAlpha(versionStr[1]),
            editorial: numberFromAlpha(versionStr[2])
        };
    }
    else if (versionStr.length === 6) {
        return {
            major: parseInt(versionStr.substring(0, 2), 10),
            technical: parseInt(versionStr.substring(2, 4), 10),
            editorial: parseInt(versionStr.substring(4, 6), 10)
        };
    }
    throw Error("Malformed version string (" + versionStr + ")");
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
