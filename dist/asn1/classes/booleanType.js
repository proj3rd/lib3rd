"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanType = void 0;
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const constants_1 = require("../constants");
const spreadsheet_2 = require("../formatter/spreadsheet");
class BooleanType {
    constructor() {
        this.booleanTypeTag = true;
    }
    static fromObject(obj) {
        const { reference, booleanTypeTag } = obj;
        if (!booleanTypeTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (reference && typeof reference !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const booleanType = new BooleanType();
        booleanType.reference = reference;
        return booleanType;
    }
    // eslint-disable-next-line no-unused-vars
    expand(modules, parameterMappings) {
        return this;
    }
    // eslint-disable-next-line class-methods-use-this
    getDepth() {
        return 0;
    }
    // eslint-disable-next-line class-methods-use-this
    setConstraints(constraints) {
        if (constraints.length > 0) {
            unimpl_1.unimpl();
        }
    }
    toSpreadsheet(worksheet, row, depth) {
        if (this.reference && !row[spreadsheet_2.HEADER_REFERENCE]) {
            // eslint-disable-next-line no-param-reassign
            row[spreadsheet_2.HEADER_REFERENCE] = this.reference;
        }
        spreadsheet_2.appendInColumn(row, spreadsheet_2.HEADER_TYPE, this.toString());
        const r = worksheet.addRow(row);
        spreadsheet_1.setOutlineLevel(r, depth);
        spreadsheet_1.drawBorder(worksheet, r, depth);
    }
    // eslint-disable-next-line class-methods-use-this
    toString() {
        return 'BOOLEAN';
    }
}
exports.BooleanType = BooleanType;
//# sourceMappingURL=booleanType.js.map