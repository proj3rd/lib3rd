"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const spreadsheet_1 = require("../../common/spreadsheet");
const style_1 = require("../../common/spreadsheet/style");
const conditions_1 = require("./conditions");
const rangeBounds_1 = require("./rangeBounds");
exports.HEADER_NAME_BASE = 'IE/Group Name';
const HEADER_PRESENCE = 'Presence';
const HEADER_RANGE = 'Range';
const HEADER_TYPE_AND_REF = 'IE type and reference';
exports.HEADER_DESCRIPTION = 'Semantics description';
const HEADER_CRITICALITY = 'Criticality';
const HEADER_ASSIGNED_CRITICALITY = 'Assigned Criticality';
const HEADER_LIST = [
    exports.HEADER_NAME_BASE,
    HEADER_PRESENCE,
    HEADER_RANGE,
    HEADER_TYPE_AND_REF,
    exports.HEADER_DESCRIPTION,
    HEADER_CRITICALITY,
    HEADER_ASSIGNED_CRITICALITY,
];
/**
 * Regular expression for section number. Following expressions are supported
 * - 9.1.2.3
 * - 9.1.2.3a
 * - A.1.2.3
 * - A.1.2.3a
 */
const reSectionNumber = /\b[1-9A-Z]\d*?(\.[1-9]\d*?)*\.[1-9]\w*?\b/;
//                         ^ Head      ^ Middle        ^ Tail
class Definition {
    constructor(definition) {
        const { sectionNumber, name, descriptionList, direction, elementList, rangeBoundList, conditionList, } = definition;
        this.sectionNumber = sectionNumber;
        this.name = name;
        this.descriptionList = descriptionList;
        this.direction = direction;
        this.elementList = elementList;
        this.rangeBounds = new rangeBounds_1.RangeBounds(rangeBoundList);
        this.conditions = new conditions_1.Conditions(conditionList);
    }
    /**
     * Expand `elementList`, `rangeBounds` and `condition`. This will mutate the object itself.
     */
    expand(definitions) {
        const elementListExpanded = lodash_1.cloneDeep(this.elementList);
        const rangeBoundsExpanded = lodash_1.cloneDeep(this.rangeBounds);
        const conditionsExpanded = lodash_1.cloneDeep(this.conditions);
        // tslint:disable-next-line: prefer-for-of
        for (let i = elementListExpanded.length - 1; i >= 0; i--) {
            const element = elementListExpanded[i];
            const { typeAndRef } = element;
            const matchResult = typeAndRef.match(reSectionNumber);
            if (!matchResult) {
                continue;
            }
            const sectionNumber = matchResult[0];
            const definitionReferenced = definitions.findDefinition(sectionNumber);
            if (!definitionReferenced) {
                continue;
            }
            const definitionExpanded = lodash_1.cloneDeep(definitionReferenced).expand(definitions);
            const { elementList: elementListReferenced, rangeBounds: rangeBoundsReferenced, conditions: conditionsReferenced, } = definitionExpanded;
            // TODO: Check single-rooted
            elementListReferenced.forEach((elementReferenced) => {
                elementReferenced.depth += element.depth + 1;
            });
            elementListExpanded.splice(i + 1, 0, ...elementListReferenced);
            if (!lodash_1.isEqual(elementListExpanded, this.elementList)) {
                this.elementList = elementListExpanded;
            }
            rangeBoundsReferenced.rangeBoundList.forEach((rangeBound) => {
                rangeBoundsExpanded.add(rangeBound);
            });
            conditionsReferenced.conditionList.forEach((condition) => {
                conditionsExpanded.add(condition);
            });
        }
        if (!lodash_1.isEqual(rangeBoundsExpanded, this.rangeBounds)) {
            this.rangeBounds = rangeBoundsExpanded;
        }
        if (!lodash_1.isEqual(conditionsExpanded, this.conditions)) {
            this.conditions = conditionsExpanded;
        }
        return this;
    }
    getDepth() {
        return this.elementList.reduce((prev, curr) => {
            return Math.max(prev, curr.depth);
        }, 0);
    }
    toSpreadsheet(workbook) {
        const wb = spreadsheet_1.getWorkbook(workbook);
        const sheetname = spreadsheet_1.uniqueSheetname(wb, `${this.sectionNumber} ${this.name}`);
        const ws = spreadsheet_1.addWorksheet(wb, sheetname, 5);
        const depth = this.getDepth();
        spreadsheet_1.addTitle(ws, this.name);
        ws.addRow([this.descriptionList.join('\n')]);
        ws.addRow([this.direction]);
        ws.addRow([]);
        spreadsheet_1.addHeader(ws, HEADER_LIST, depth);
        this.elementList.forEach((element) => {
            const { name, presence, range, typeAndRef, description, criticality, assignedCriticality, depth, } = element;
            const rowInput = {
                [spreadsheet_1.headerIndexed(exports.HEADER_NAME_BASE, depth)]: name,
                [HEADER_PRESENCE]: presence,
                [HEADER_RANGE]: range,
                [HEADER_TYPE_AND_REF]: typeAndRef,
                [exports.HEADER_DESCRIPTION]: description,
                [HEADER_CRITICALITY]: criticality,
                [HEADER_ASSIGNED_CRITICALITY]: assignedCriticality,
            };
            const r = ws.addRow(rowInput);
            spreadsheet_1.setOutlineLevel(r, depth);
            spreadsheet_1.drawBorder(ws, r, depth);
        });
        spreadsheet_1.drawBorder(ws, ws.addRow([]), 0, style_1.BorderTop);
        this.conditions.toSpreadsheet(ws);
        this.rangeBounds.toSpreadsheet(ws);
        return wb;
    }
}
exports.Definition = Definition;
//# sourceMappingURL=definition.js.map