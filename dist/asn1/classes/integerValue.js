"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegerValue = void 0;
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const spreadsheet_2 = require("../formatter/spreadsheet");
const valueReference_1 = require("./valueReference");
class IntegerValue {
    constructor(literal) {
        this.literal = literal;
        const value = +literal;
        if (Number.isNaN(value)) {
            this.value = new valueReference_1.ValueReference(literal);
        }
        else {
            this.value = value;
        }
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