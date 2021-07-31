"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSetAssignment = void 0;
const lodash_1 = require("lodash");
const spreadsheet_1 = require("../../common/spreadsheet");
const style_1 = require("../../common/spreadsheet/style");
const constants_1 = require("../constants");
const spreadsheet_2 = require("../formatter/spreadsheet");
const objectClassReference_1 = require("./objectClassReference");
const objectSet_1 = require("./objectSet");
/**
 * X.681 clause 12.1
 * ```
 * name definedObjectClass ::= objectSet
 * ```
 */
class ObjectSetAssignment {
    constructor(name, definedObjectClass, objectSet) {
        this.objectSetAssignmentTag = true;
        this.name = name;
        this.definedObjectClass = definedObjectClass;
        this.objectSet = objectSet;
    }
    static fromObject(obj) {
        const { name: nameObject, definedObjectClass: definedObjectClassObject, objectSet: objectSetObject, objectSetAssignmentTag, } = obj;
        if (!objectSetAssignmentTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (typeof nameObject !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const definedObjectClass = objectClassReference_1.ObjectClassReference.fromObject(definedObjectClassObject);
        const objectSet = objectSet_1.ObjectSet.fromObject(objectSetObject);
        return new ObjectSetAssignment(nameObject, definedObjectClass, objectSet);
    }
    /**
     * Expand `objectSet` property. This will mutate the object itself.
     * @param modules
     */
    expand(modules) {
        const expandedType = lodash_1.cloneDeep(this.objectSet).expand(modules, []);
        if (!lodash_1.isEqual(expandedType, this.objectSet)) {
            this.objectSet = expandedType;
        }
        return this;
    }
    getDepth() {
        return this.objectSet.getDepth();
    }
    toSpreadsheet(workbook) {
        const wb = spreadsheet_1.getWorkbook(workbook);
        const sheetname = spreadsheet_1.uniqueSheetname(wb, this.fullName());
        const ws = spreadsheet_1.addWorksheet(wb, sheetname, 3);
        const depth = this.getDepth();
        spreadsheet_1.addTitle(ws, this.name);
        ws.addRow([]);
        spreadsheet_1.addHeader(ws, spreadsheet_2.HEADER_LIST, depth);
        this.objectSet.toSpreadsheet(ws, {
            [spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, 0)]: this.fullName(),
        }, 0);
        spreadsheet_1.drawBorder(ws, ws.addRow([]), 0, style_1.BorderTop);
        return wb;
    }
    toString() {
        return `${this.fullName()} ::= ${this.objectSet.toString()}`;
    }
    fullName() {
        return `${this.name} ${this.definedObjectClass.toString()}`;
    }
}
exports.ObjectSetAssignment = ObjectSetAssignment;
//# sourceMappingURL=objectSetAssignment.js.map