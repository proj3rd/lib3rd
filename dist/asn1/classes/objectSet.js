"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSet = void 0;
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const formatter_1 = require("../formatter");
const spreadsheet_2 = require("../formatter/spreadsheet");
/**
 * TODO: ObjectSet only supports DefinedObjectSet currently.
 * Note: `SimpleTableConstraint` is equivalent to `ObjectSet`.
 */
class ObjectSet {
    constructor(objectSetSpec) {
        this.objectSetSpec = objectSetSpec;
    }
    /**
     * Expand `objectSetSpec` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules, parameterMappings) {
        if (parameterMappings.length) {
            return unimpl_1.unimpl();
        }
        this.objectSetSpec = this.objectSetSpec.map((elementSetSpec) => {
            const expandedType = lodash_1.cloneDeep(elementSetSpec).expand(modules, parameterMappings);
            if (lodash_1.isEqual(expandedType, elementSetSpec)) {
                return elementSetSpec;
            }
            return expandedType;
        });
        return this;
    }
    getDepth() {
        return this.objectSetSpec.reduce((prev, curr) => Math.max(prev, curr.getDepth() + 1), 0);
    }
    toSpreadsheet(worksheet, row, depth) {
        if (this.reference && !row[spreadsheet_2.HEADER_REFERENCE]) {
            // eslint-disable-next-line no-param-reassign
            row[spreadsheet_2.HEADER_REFERENCE] = this.reference;
        }
        if (this.objectSetSpec.length === 0) {
            spreadsheet_2.appendInColumn(row, spreadsheet_2.HEADER_TYPE, '{}');
            const r = worksheet.addRow(row);
            spreadsheet_1.setOutlineLevel(r, depth);
            spreadsheet_1.drawBorder(worksheet, r, depth);
            return;
        }
        spreadsheet_2.appendInColumn(row, spreadsheet_2.HEADER_TYPE, '{');
        const r1 = worksheet.addRow(row);
        spreadsheet_1.setOutlineLevel(r1, depth);
        spreadsheet_1.drawBorder(worksheet, r1, depth);
        this.objectSetSpec.forEach((elementSetSpec) => {
            elementSetSpec.toSpreadsheet(worksheet, {}, depth + 1);
        });
        const r2 = worksheet.addRow({
            [spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, depth)]: '}',
        });
        spreadsheet_1.setOutlineLevel(r2, depth);
        spreadsheet_1.drawBorder(worksheet, r2, depth);
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