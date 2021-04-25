"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Syntax = void 0;
const spreadsheet_1 = require("../../common/spreadsheet");
const spreadsheet_2 = require("../formatter/spreadsheet");
class Syntax {
    constructor(literal, primitiveFieldName, optional) {
        this.literal = literal;
        this.primitiveFieldName = primitiveFieldName;
        this.optional = optional;
    }
    // eslint-disable-next-line class-methods-use-this
    getDepth() {
        return 0;
    }
    toSpreadsheet(worksheet, row, depth) {
        const r = worksheet.addRow({
            [spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, depth)]: this.literal,
            [spreadsheet_2.HEADER_REFERENCE]: this.primitiveFieldName.toString(),
            [spreadsheet_2.HEADER_OPTIONAL]: this.optional ? 'OPTIONAL' : undefined,
        });
        spreadsheet_1.setOutlineLevel(r, depth);
        spreadsheet_1.drawBorder(worksheet, r, depth);
    }
    toString() {
        if (this.optional) {
            return `[${this.literal}    ${this.primitiveFieldName.toString()}]`;
        }
        return `${this.literal}    ${this.primitiveFieldName.toString()}`;
    }
}
exports.Syntax = Syntax;
//# sourceMappingURL=syntax.js.map