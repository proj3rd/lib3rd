"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatter_1 = require("../formatter");
const spreadsheet_1 = require("../formatter/spreadsheet");
/**
 * TODO: ObjectSet only supports DefinedObjectSet currently.
 * Note: `SimpleTableConstraint` is equivalent to `ObjectSet`.
 */
class ObjectSet {
    constructor(objectSetSpec) {
        this.objectSetSpec = objectSetSpec;
    }
    getDepth() {
        return this.objectSetSpec.reduce((prev, curr) => {
            return Math.max(prev, curr.getDepth() + 1);
        }, 0);
    }
    toSpreadsheet(worksheet, row, depth) {
        if (this.objectSetSpec.length === 0) {
            row[spreadsheet_1.HEADER_TYPE] = '{}';
            const r = worksheet.addRow(row);
            spreadsheet_1.drawBorder(worksheet, r, depth);
            return;
        }
        this.objectSetSpec.forEach((elementSetSpec) => {
            elementSetSpec.toSpreadsheet(worksheet, {}, depth + 1);
        });
    }
    toString() {
        const innerString = this.objectSetSpec
            .map((elementSetSpec) => elementSetSpec.toString())
            .join(',\n');
        const arrToString = ['{', formatter_1.indent(innerString), '}'];
        return arrToString.join('\n');
    }
}
exports.ObjectSet = ObjectSet;
//# sourceMappingURL=objectSet.js.map