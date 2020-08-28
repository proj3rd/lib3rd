"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../formatter/spreadsheet");
const booleanValue_1 = require("./booleanValue");
const externalObjectSetReference_1 = require("./externalObjectSetReference");
const integerValue_1 = require("./integerValue");
const objectSetReference_1 = require("./objectSetReference");
const sizeConstraint_1 = require("./sizeConstraint");
const valueRange_1 = require("./valueRange");
class Unions {
    constructor(intersections) {
        this.intersectionsList = intersections;
    }
    getDepth() {
        return this.intersectionsList.reduce((prev, curr) => {
            const depthIntersections = curr.reduce((prev, curr) => {
                const depthCurr = typeof curr === 'string' ? 0 : curr.getDepth();
                return Math.max(prev, depthCurr);
            }, 0);
            return Math.max(prev, depthIntersections);
        }, 0);
    }
    toSpreadsheet(worksheet, row, depth) {
        const { length: lengthUnions } = this.intersectionsList;
        this.intersectionsList.forEach((intersections, indexUnions) => {
            const { length: lengthIntersections } = intersections;
            intersections.forEach((elements, indexIntersections) => {
                if (typeof elements === 'string') {
                    const r = worksheet.addRow({
                        [spreadsheet_1.headerIndexed(spreadsheet_1.HEADER_NAME_BASE, depth + 1)]: elements,
                    });
                    spreadsheet_1.drawBorder(worksheet, r, depth + 1);
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
                else {
                    elements.toSpreadsheet(worksheet, {}, depth + 1);
                }
                if (indexIntersections !== lengthIntersections - 1) {
                    const r = worksheet.addRow({
                        [spreadsheet_1.headerIndexed(spreadsheet_1.HEADER_NAME_BASE, depth + 1)]: '∩',
                    });
                    spreadsheet_1.drawBorder(worksheet, r, depth + 1);
                }
            });
            if (indexUnions !== lengthUnions - 1) {
                const r = worksheet.addRow({
                    [spreadsheet_1.headerIndexed(spreadsheet_1.HEADER_NAME_BASE, depth + 1)]: '∪',
                });
                spreadsheet_1.drawBorder(worksheet, r, depth + 1);
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