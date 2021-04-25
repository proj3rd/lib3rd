"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unions = void 0;
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const spreadsheet_2 = require("../formatter/spreadsheet");
const booleanValue_1 = require("./booleanValue");
const externalObjectSetReference_1 = require("./externalObjectSetReference");
const integerValue_1 = require("./integerValue");
const objectSet_1 = require("./objectSet");
const objectSetReference_1 = require("./objectSetReference");
const sizeConstraint_1 = require("./sizeConstraint");
const valueRange_1 = require("./valueRange");
const valueReference_1 = require("./valueReference");
class Unions {
    constructor(intersections) {
        this.intersectionsList = intersections;
    }
    /**
     * Expand `intersectionsList` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules, parameterMappings) {
        this.intersectionsList = this.intersectionsList.map((intersections) => intersections.map((elements) => {
            if (typeof elements === 'string') {
                return elements;
            }
            const expandedType = lodash_1.cloneDeep(elements).expand(modules, parameterMappings);
            if (lodash_1.isEqual(expandedType, elements)) {
                return elements;
            }
            if (expandedType instanceof objectSet_1.ObjectSet) {
                return unimpl_1.unimpl();
            }
            return expandedType;
        }));
        return this;
    }
    getDepth() {
        return this.intersectionsList.reduce((prev1, curr1) => {
            const depthIntersections = curr1.reduce((prev2, curr2) => {
                const depthCurr = typeof curr2 === 'string' ? 0 : curr2.getDepth();
                return Math.max(prev2, depthCurr);
            }, 0);
            return Math.max(prev1, depthIntersections);
        }, 0);
    }
    toSpreadsheet(worksheet, row, depth) {
        const { length: lengthUnions } = this.intersectionsList;
        this.intersectionsList.forEach((intersections, indexUnions) => {
            const { length: lengthIntersections } = intersections;
            intersections.forEach((elements, indexIntersections) => {
                if (typeof elements === 'string') {
                    const r = worksheet.addRow({
                        [spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, depth)]: elements,
                    });
                    spreadsheet_1.setOutlineLevel(r, depth);
                    spreadsheet_1.drawBorder(worksheet, r, depth);
                }
                else if (elements instanceof booleanValue_1.BooleanValue) {
                    unimpl_1.unreach(elements);
                }
                else if (elements instanceof externalObjectSetReference_1.ExternalObjectSetReference) {
                    unimpl_1.unreach(elements);
                }
                else if (elements instanceof integerValue_1.IntegerValue) {
                    unimpl_1.unreach(elements);
                }
                else if (elements instanceof objectSetReference_1.ObjectSetReference) {
                    unimpl_1.unreach(elements);
                }
                else if (elements instanceof sizeConstraint_1.SizeConstraint) {
                    unimpl_1.unreach(elements);
                }
                else if (elements instanceof valueRange_1.ValueRange) {
                    unimpl_1.unreach(elements);
                }
                else if (elements instanceof valueReference_1.ValueReference) {
                    unimpl_1.unreach(elements);
                }
                else {
                    elements.toSpreadsheet(worksheet, {}, depth);
                }
                if (indexIntersections !== lengthIntersections - 1) {
                    const r = worksheet.addRow({
                        [spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, depth)]: '∩',
                    });
                    spreadsheet_1.setOutlineLevel(r, depth);
                    spreadsheet_1.drawBorder(worksheet, r, depth);
                }
            });
            if (indexUnions !== lengthUnions - 1) {
                const r = worksheet.addRow({
                    [spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, depth)]: '∪',
                });
                spreadsheet_1.setOutlineLevel(r, depth);
                spreadsheet_1.drawBorder(worksheet, r, depth);
            }
        });
    }
    toString() {
        return this.intersectionsList
            .map((intersections) => intersections.toString())
            .join(' |\n');
    }
}
exports.Unions = Unions;
//# sourceMappingURL=unions.js.map