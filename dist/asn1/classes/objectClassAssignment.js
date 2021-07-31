"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectClassAssignment = void 0;
const lodash_1 = require("lodash");
const spreadsheet_1 = require("../../common/spreadsheet");
const style_1 = require("../../common/spreadsheet/style");
const constants_1 = require("../constants");
const spreadsheet_2 = require("../formatter/spreadsheet");
const objectClass_1 = require("./objectClass");
class ObjectClassAssignment {
    constructor(name, objectClass) {
        this.objectClassAssignmentTag = true;
        this.name = name;
        this.objectClass = objectClass;
    }
    static fromObject(obj) {
        const { name: nameObject, objectClass: objectClassObject, objectClassAssignmentTag, } = obj;
        if (!objectClassAssignmentTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (typeof nameObject !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const objectClass = objectClass_1.ObjectClassDefinition.fromObject(objectClassObject);
        return new ObjectClassAssignment(nameObject, objectClass);
    }
    /**
     * Expand `objectClass` property. This will mutate the object itself.
     * @param modules
     */
    expand(modules) {
        const expandedType = lodash_1.cloneDeep(this.objectClass).expand(modules, []);
        if (!lodash_1.isEqual(expandedType, this.objectClass)) {
            this.objectClass = expandedType;
        }
        return this;
    }
    getDepth() {
        return this.objectClass.getDepth();
    }
    toSpreadsheet(workbook) {
        const wb = spreadsheet_1.getWorkbook(workbook);
        const sheetname = spreadsheet_1.uniqueSheetname(wb, this.name);
        const ws = spreadsheet_1.addWorksheet(wb, sheetname, 3);
        const depth = this.getDepth();
        spreadsheet_1.addTitle(ws, this.name);
        ws.addRow([]);
        spreadsheet_1.addHeader(ws, spreadsheet_2.HEADER_LIST, depth);
        this.objectClass.toSpreadsheet(ws, {
            [spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, 0)]: this.name,
        }, 0);
        spreadsheet_1.drawBorder(ws, ws.addRow([]), 0, style_1.BorderTop);
        return wb;
    }
    toString() {
        return `${this.name} ::= ${this.objectClass.toString()}`;
    }
}
exports.ObjectClassAssignment = ObjectClassAssignment;
//# sourceMappingURL=objectClassAssignment.js.map