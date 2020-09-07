"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
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
    /**
     * Expand `objectSetSpec` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules, parameterMappings) {
        if (parameterMappings.length) {
            return unimpl_1.unimpl();
        }
        this.objectSetSpec = this.objectSetSpec.map((elementSetSpec, index) => {
            const expandedType = lodash_1.cloneDeep(elementSetSpec).expand(modules, parameterMappings);
            if (lodash_1.isEqual(expandedType, elementSetSpec)) {
                return elementSetSpec;
            }
            return expandedType;
        });
        return this;
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