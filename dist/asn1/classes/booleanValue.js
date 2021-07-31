"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanValue = void 0;
const spreadsheet_1 = require("../../common/spreadsheet");
const constants_1 = require("../constants");
const spreadsheet_2 = require("../formatter/spreadsheet");
class BooleanValue {
    constructor(literal) {
        this.booleanValueTag = true;
        this.literal = literal;
        if (literal === 'TRUE' || literal === 'true') {
            this.value = true;
        }
        else if (literal === 'FALSE' || literal === 'false') {
            this.value = false;
        }
        else {
            throw Error();
        }
    }
    static fromObject(obj) {
        const { literal: literalObject, value: valueObject, reference: referenceObject, booleanValueTag } = obj;
        if (!booleanValueTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (typeof literalObject !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (typeof valueObject !== 'boolean') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (referenceObject && typeof referenceObject !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const booleanValue = new BooleanValue(literalObject);
        booleanValue.reference = referenceObject;
        return booleanValue;
    }
    // eslint-disable-next-line no-unused-vars
    expand(moduleS, parameterMappings) {
        return this;
    }
    // eslint-disable-next-line class-methods-use-this
    getDepth() {
        return 0;
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
    toString() {
        return this.literal;
    }
}
exports.BooleanValue = BooleanValue;
//# sourceMappingURL=booleanValue.js.map