"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Syntax = void 0;
const spreadsheet_1 = require("../../common/spreadsheet");
const constants_1 = require("../constants");
const spreadsheet_2 = require("../formatter/spreadsheet");
const primitiveFieldName_1 = require("./primitiveFieldName");
class Syntax {
    constructor(literal, primitiveFieldName, optional) {
        this.syntaxTag = true;
        this.literal = literal;
        this.primitiveFieldName = primitiveFieldName;
        this.optional = optional;
    }
    static fromObject(obj) {
        const { literal: literalObj, primitiveFieldName: primitiveFieldNameObj, optional: optionalObj, syntaxTag, } = obj;
        if (!syntaxTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (typeof literalObj !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (typeof optionalObj !== 'boolean') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const primitiveFieldName = primitiveFieldName_1.PrimitiveFieldName.fromObject(primitiveFieldNameObj);
        return new Syntax(literalObj, primitiveFieldName, optionalObj);
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