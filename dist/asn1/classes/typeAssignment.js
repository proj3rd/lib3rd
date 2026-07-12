"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeAssignment = void 0;
const lodash_1 = require("lodash");
const unimpl_1 = require("../../utils/unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const style_1 = require("../../common/spreadsheet/style");
const constants_1 = require("../constants");
const spreadsheet_2 = require("../formatter/spreadsheet");
const asnType_1 = require("../types/asnType");
const objectSet_1 = require("./objectSet");
class TypeAssignment {
    constructor(name, asnType) {
        this.typeAssignmentTag = true;
        this.name = name;
        this.asnType = asnType;
        if (asnType instanceof objectSet_1.ObjectSet) {
            return unimpl_1.unimpl('ObjectSet cannot be used in instantiating but expanding TypeAssignment');
        }
    }
    static fromObject(obj) {
        const { name: nameObject, asnType: asnTypeObject, typeAssignmentTag } = obj;
        if (!typeAssignmentTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (!nameObject || typeof nameObject !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const asnType = asnType_1.AsnTypeFromObject(asnTypeObject);
        return new TypeAssignment(nameObject, asnType);
    }
    /**
     * Expand `asnTye` property. This will mutate the object itself.
     * @param modules
     */
    expand(modules) {
        const expandedType = lodash_1.cloneDeep(this.asnType).expand(modules, []);
        if (!lodash_1.isEqual(expandedType, this.asnType)) {
            this.asnType = expandedType;
        }
        return this;
    }
    getDepth() {
        return this.asnType.getDepth();
    }
    toSpreadsheet(workbook) {
        const wb = spreadsheet_1.getWorkbook(workbook);
        const sheetname = spreadsheet_1.uniqueSheetname(wb, this.name);
        const ws = spreadsheet_1.addWorksheet(wb, sheetname, 3);
        const depth = this.getDepth();
        spreadsheet_1.addTitle(ws, this.name);
        ws.addRow([]);
        spreadsheet_1.addHeader(ws, spreadsheet_2.HEADER_LIST, depth);
        this.asnType.toSpreadsheet(ws, {
            [spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, 0)]: this.name,
        }, 0);
        spreadsheet_1.drawBorder(ws, ws.addRow([]), 0, style_1.BorderTop);
        return wb;
    }
    toString() {
        return `${this.name} ::= ${this.asnType.toString()}`;
    }
}
exports.TypeAssignment = TypeAssignment;
//# sourceMappingURL=typeAssignment.js.map