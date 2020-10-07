"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HEADER_NAME_BASE = 'Name';
exports.HEADER_REFERENCE = 'Reference';
exports.HEADER_TYPE = 'Type';
exports.HEADER_OPTIONAL = 'Optional';
exports.HEADER_UNIQUE = 'Unique';
exports.HEADER_TAG = 'Tag';
exports.HEADER_LIST = [
    exports.HEADER_NAME_BASE,
    exports.HEADER_REFERENCE,
    exports.HEADER_TYPE,
    exports.HEADER_OPTIONAL,
    exports.HEADER_UNIQUE,
    exports.HEADER_TAG,
];
function appendInColumn(row, column, value) {
    const col = row[column];
    // eslint-disable-next-line no-param-reassign
    row[column] = col === undefined ? value : `${col} ${value}`;
}
exports.appendInColumn = appendInColumn;
//# sourceMappingURL=spreadsheet.js.map