"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Definition = exports.reSectionNumber = exports.HEADER_DESCRIPTION = exports.HEADER_NAME_BASE = void 0;
const lodash_1 = require("lodash");
const spreadsheet_1 = require("../../asn1/formatter/spreadsheet");
const spreadsheet_2 = require("../../common/spreadsheet");
const style_1 = require("../../common/spreadsheet/style");
const constants_1 = require("../constants");
const conditions_1 = require("./conditions");
const rangeBounds_1 = require("./rangeBounds");
exports.HEADER_NAME_BASE = "IE/Group Name";
const HEADER_PRESENCE = "Presence";
const HEADER_RANGE = "Range";
exports.HEADER_DESCRIPTION = "Semantics description";
const HEADER_CRITICALITY = "Criticality";
const HEADER_ASSIGNED_CRITICALITY = "Assigned Criticality";
const HEADER_LIST = [
    exports.HEADER_NAME_BASE,
    HEADER_PRESENCE,
    HEADER_RANGE,
    spreadsheet_1.HEADER_REFERENCE,
    spreadsheet_1.HEADER_TYPE,
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
exports.reSectionNumber = /\b[1-9A-Z]\d*?(\.[1-9]\d*?)*\.[1-9]\w*?\b/;
//                         ^ Head      ^ Middle        ^ Tail
// eslint-disable-next-line no-use-before-define
function canMerge(parent, child) {
    if (!child.hasSingleRoot()) {
        return false;
    }
    const { elementList } = child;
    const firstElement = elementList[0];
    if (parent.presence !== "" &&
        parent.presence !== "M" &&
        parent.presence !== "O" &&
        firstElement.presence !== "" &&
        firstElement.presence !== "M" &&
        firstElement.presence !== "O" &&
        parent.presence !== firstElement.presence) {
        return false;
    }
    if (parent.range !== "" || firstElement.range !== "") {
        return false;
    }
    if (parent.criticality !== "" &&
        firstElement.criticality !== "" &&
        parent.criticality !== firstElement.criticality) {
        return false;
    }
    if (parent.assignedCriticality !== "" &&
        firstElement.assignedCriticality !== "" &&
        parent.assignedCriticality !== firstElement.assignedCriticality) {
        return false;
    }
    return true;
}
function merge(parent, child) {
    if (child.name.toUpperCase().startsWith("CHOICE")) {
        // eslint-disable-next-line no-param-reassign
        parent.name = `CHOICE ${parent.name}`;
    }
    if (parent.presence === "O" || child.presence === "O") {
        // eslint-disable-next-line no-param-reassign
        parent.presence = "O";
    }
    else {
        // eslint-disable-next-line no-param-reassign
        parent.presence = parent.presence || child.presence;
    }
    if (child.type !== "") {
        // eslint-disable-next-line no-param-reassign
        parent.type = child.type;
    }
    const descriptionList = [];
    if (parent.description) {
        descriptionList.push(parent.description);
    }
    if (child.description) {
        descriptionList.push(child.description);
    }
    // eslint-disable-next-line no-param-reassign
    parent.description = descriptionList.join("\n\n");
}
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
    static fromObject(obj) {
        const { sectionNumber, name, descriptionList: descriptionListObj, direction, elementList: elementListObj, rangeBounds: rangeBoundsObj, conditions: conditionsObj, } = obj;
        if (!sectionNumber || typeof sectionNumber !== "string") {
            throw Error(constants_1.MSG_ERR_RAN3_TABULAR_MALFORMED_SERIALIZATION);
        }
        if (!name || typeof name !== "string") {
            throw Error(constants_1.MSG_ERR_RAN3_TABULAR_MALFORMED_SERIALIZATION);
        }
        const descriptionList = descriptionListObj.map((descriptionObj) => {
            if (typeof descriptionObj !== "string") {
                throw Error(constants_1.MSG_ERR_RAN3_TABULAR_MALFORMED_SERIALIZATION);
            }
            return descriptionObj;
        });
        if (typeof direction !== "string") {
            throw Error(constants_1.MSG_ERR_RAN3_TABULAR_MALFORMED_SERIALIZATION);
        }
        if (!(elementListObj instanceof Array)) {
            throw Error(constants_1.MSG_ERR_RAN3_TABULAR_MALFORMED_SERIALIZATION);
        }
        const { rangeBoundList } = rangeBoundsObj;
        if (!rangeBoundList) {
            throw Error(constants_1.MSG_ERR_RAN3_TABULAR_MALFORMED_SERIALIZATION);
        }
        const { conditionList } = conditionsObj;
        if (!conditionList) {
            throw Error(constants_1.MSG_ERR_RAN3_TABULAR_MALFORMED_SERIALIZATION);
        }
        return new Definition({
            sectionNumber,
            name,
            descriptionList,
            direction,
            elementList: elementListObj,
            rangeBoundList,
            conditionList,
        });
    }
    /**
     * Expand `elementList`, `rangeBounds` and `condition`. This will mutate the object itself.
     */
    expand(definitions) {
        const elementListExpanded = lodash_1.cloneDeep(this.elementList);
        const rangeBoundsExpanded = lodash_1.cloneDeep(this.rangeBounds);
        const conditionsExpanded = lodash_1.cloneDeep(this.conditions);
        // tslint:disable-next-line: prefer-for-of
        for (let i = elementListExpanded.length - 1; i >= 0; i -= 1) {
            const element = elementListExpanded[i];
            const { reference } = element;
            const matchResult = reference.match(exports.reSectionNumber);
            if (matchResult) {
                const sectionNumber = matchResult[0];
                const definitionReferenced = definitions.findDefinition(sectionNumber);
                if (definitionReferenced) {
                    const definitionExpanded = lodash_1.cloneDeep(definitionReferenced).expand(definitions);
                    const { elementList: elementListReferenced, rangeBounds: rangeBoundsReferenced, conditions: conditionsReferenced, } = definitionExpanded;
                    if (canMerge(elementListExpanded[i], definitionExpanded)) {
                        elementListReferenced.forEach((elementReferenced) => {
                            // eslint-disable-next-line no-param-reassign
                            elementReferenced.depth += element.depth;
                        });
                        merge(elementListExpanded[i], elementListReferenced[0]);
                        elementListExpanded.splice(i + 1, 0, ...elementListReferenced.slice(1));
                    }
                    else {
                        elementListReferenced.forEach((elementReferenced) => {
                            // eslint-disable-next-line no-param-reassign
                            elementReferenced.depth += element.depth + 1;
                        });
                        elementListExpanded.splice(i + 1, 0, ...elementListReferenced);
                    }
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
            }
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
        return this.elementList.reduce((prev, curr) => Math.max(prev, curr.depth), 0);
    }
    hasSingleRoot() {
        if (this.elementList.length === 0) {
            return false;
        }
        const depthAndCount = this.elementList.reduce((prev, curr) => {
            if (curr.depth < prev.depth) {
                return {
                    depth: curr.depth,
                    count: 1,
                };
            }
            if (curr.depth === prev.depth) {
                return {
                    depth: prev.depth,
                    count: prev.count + 1,
                };
            }
            return prev;
        }, { depth: Infinity, count: 0 });
        return depthAndCount.count === 1;
    }
    toSpreadsheet(workbook) {
        const wb = spreadsheet_2.getWorkbook(workbook);
        const sheetname = spreadsheet_2.uniqueSheetname(wb, `${this.sectionNumber} ${this.name}`);
        const ws = spreadsheet_2.addWorksheet(wb, sheetname, 5);
        const depth = this.getDepth();
        spreadsheet_2.addTitle(ws, this.name);
        ws.addRow([this.descriptionList.join("\n")]);
        ws.addRow([this.direction]);
        ws.addRow([]);
        spreadsheet_2.addHeader(ws, HEADER_LIST, depth);
        this.elementList.forEach((element) => {
            const { name, presence, range, reference, type, description, criticality, assignedCriticality, depth: depthElement, } = element;
            const rowInput = {
                [spreadsheet_2.headerIndexed(exports.HEADER_NAME_BASE, depthElement)]: name,
                [HEADER_PRESENCE]: presence,
                [HEADER_RANGE]: range,
                [spreadsheet_1.HEADER_REFERENCE]: reference,
                [spreadsheet_1.HEADER_TYPE]: type,
                [exports.HEADER_DESCRIPTION]: description,
                [HEADER_CRITICALITY]: criticality,
                [HEADER_ASSIGNED_CRITICALITY]: assignedCriticality,
            };
            const r = ws.addRow(rowInput);
            spreadsheet_2.setOutlineLevel(r, depthElement);
            spreadsheet_2.drawBorder(ws, r, depthElement);
        });
        spreadsheet_2.drawBorder(ws, ws.addRow([]), 0, style_1.BorderTop);
        this.conditions.toSpreadsheet(ws);
        this.rangeBounds.toSpreadsheet(ws);
        return wb;
    }
}
exports.Definition = Definition;
//# sourceMappingURL=definition.js.map