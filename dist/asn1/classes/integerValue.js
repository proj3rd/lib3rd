"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegerValue = void 0;
const unimpl_1 = require("../../utils/unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const constants_1 = require("../constants");
const spreadsheet_2 = require("../formatter/spreadsheet");
const valueReference_1 = require("./valueReference");
class IntegerValue {
    constructor(literal) {
        this.integerValueTag = true;
        this.literal = literal;
        const value = +literal;
        if (Number.isNaN(value)) {
            this.value = new valueReference_1.ValueReference(literal);
        }
        else {
            this.value = value;
        }
    }
    static fromObject(obj) {
        const { literal: literalObject, reference: referenceObject, integerValueTag, } = obj;
        if (!integerValueTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (typeof literalObject !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (referenceObject && typeof referenceObject !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const integerValue = new IntegerValue(literalObject);
        integerValue.reference = referenceObject;
        return integerValue;
    }
    expand(modules, parameterMappings) {
        const { value } = this;
        if (value instanceof valueReference_1.ValueReference) {
            const parameterMapping = parameterMappings
                .find((paramMap) => paramMap.parameter.dummyReference === value.valueReference);
            if (parameterMapping === undefined) {
                return this;
            }
            if (parameterMapping.actualParameter === undefined) {
                return this;
            }
            return unimpl_1.todo();
        }
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
exports.IntegerValue = IntegerValue;
//# sourceMappingURL=integerValue.js.map