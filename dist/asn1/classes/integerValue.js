"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const spreadsheet_2 = require("../formatter/spreadsheet");
const spreadsheet_3 = require("../../common/spreadsheet");
const ValueReference_1 = require("./ValueReference");
class IntegerValue {
    constructor(literal) {
        this.literal = literal;
        const value = +literal;
        if (Number.isNaN(value)) {
            this.value = new ValueReference_1.ValueReference(literal);
        }
        else {
            this.value = value;
        }
    }
    expand(modules, parameterMappings) {
        const { value } = this;
        if (value instanceof ValueReference_1.ValueReference) {
            const parameterMapping = parameterMappings.find((paramMap) => {
                return paramMap.parameter.dummyReference === value.valueReference;
            });
            if (parameterMapping === undefined) {
                return this;
            }
            else {
                if (parameterMapping.actualParameter === undefined) {
                    return this;
                }
                else {
                    return unimpl_1.todo();
                }
            }
        }
        return this;
    }
    getDepth() {
        return 0;
    }
    toSpreadsheet(worksheet, row, depth) {
        spreadsheet_2.appendInColumn(row, spreadsheet_2.HEADER_TYPE, this.toString());
        const r = worksheet.addRow(row);
        spreadsheet_1.setOutlineLevel(r, depth);
        spreadsheet_3.drawBorder(worksheet, r, depth);
    }
    toString() {
        return this.literal;
    }
}
exports.IntegerValue = IntegerValue;
//# sourceMappingURL=integerValue.js.map