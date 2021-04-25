"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indent = exports.getPermittedIntegerValues = void 0;
const extensionMarker_1 = require("../classes/extensionMarker");
const RE_START_OF_LINE = /^/gm;
function getConstraintSeparator(constraints, index) {
    if (index === 0) {
        throw RangeError();
    }
    const prevIsExtensionMarker = constraints[index - 1] instanceof extensionMarker_1.ExtensionMarker;
    const currIsExtensionMarker = constraints[index] instanceof extensionMarker_1.ExtensionMarker;
    if (!prevIsExtensionMarker && !currIsExtensionMarker) {
        return '|';
    }
    return ',';
}
/**
 * Use case: `SIZE (...)` and `INTEGER (...)`
 * @param constraints
 */
function getPermittedIntegerValues(constraints) {
    if (constraints.length === 0) {
        return '';
    }
    const arrToString = ['('];
    constraints.forEach((c, index) => {
        if (index !== 0) {
            arrToString.push(getConstraintSeparator(constraints, index));
        }
        arrToString.push(c.toString());
    });
    arrToString.push(')');
    return arrToString.join(' ');
}
exports.getPermittedIntegerValues = getPermittedIntegerValues;
function indent(text, tabSize = 4) {
    return text.replace(RE_START_OF_LINE, ' '.repeat(tabSize));
}
exports.indent = indent;
//# sourceMappingURL=index.js.map