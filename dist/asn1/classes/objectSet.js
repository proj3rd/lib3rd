"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSet = void 0;
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const constants_1 = require("../constants");
const formatter_1 = require("../formatter");
const spreadsheet_2 = require("../formatter/spreadsheet");
const elementSetSpecs_1 = require("../types/elementSetSpecs");
/**
 * TODO: ObjectSet only supports DefinedObjectSet currently.
 * Note: `SimpleTableConstraint` is equivalent to `ObjectSet`.
 */
class ObjectSet {
    constructor(objectSetSpec) {
        this.objectSetTag = true;
        this.objectSetSpec = objectSetSpec;
    }
    static fromObject(obj) {
        const { objectSetSpec: objectSetSpecObj, reference: referenceObj, objectSetTag, } = obj;
        if (!objectSetTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (referenceObj && typeof referenceObj !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const objectSetSpec = elementSetSpecs_1.ElementSetSpecsFromObject(objectSetSpecObj);
        const objectSet = new ObjectSet(objectSetSpec);
        objectSet.reference = referenceObj;
        return objectSet;
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