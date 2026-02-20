"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeFieldSpec = void 0;
const spreadsheet_1 = require("../../common/spreadsheet");
const constants_1 = require("../constants");
const spreadsheet_2 = require("../formatter/spreadsheet");
const optionality_1 = require("./optionality");
const primitiveFieldName_1 = require("./primitiveFieldName");
class TypeFieldSpec {
    constructor(fieldRerence, optionality) {
        this.typeFieldSpecTag = true;
        this.fieldReference = fieldRerence;
        this.optionality = optionality;
    }
    static fromObject(obj) {
        const { fieldReference: fieldReferenceObj, optionality: optionalityObj, typeFieldSpecTag, } = obj;
        if (!typeFieldSpecTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const fieldReference = primitiveFieldName_1.PrimitiveFieldName.fromObject(fieldReferenceObj);
        const optionality = optionalityObj !== undefined ? optionality_1.Optionality.fromObject(optionalityObj) : undefined;
        return new TypeFieldSpec(fieldReference, optionality);
    }
    // eslint-disable-next-line no-unused-vars
    expand(modules, parameterMappings) {
        // TODO: Shall `optionality` be expanded?
        return this;
    }
    // eslint-disable-next-line class-methods-use-this
    getDepth() {
        return 0;
    }
    toSpreadsheet(worksheet, row, depth) {
        // eslint-disable-next-line no-param-reassign
        row[spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, depth)] = this.fieldReference.toString();
        // eslint-disable-next-line no-param-reassign
        row[spreadsheet_2.HEADER_OPTIONAL] = this.optionality
            ? this.optionality.toString()
            : undefined;
        const r = worksheet.addRow(row);
        spreadsheet_1.setOutlineLevel(r, depth);
        spreadsheet_1.drawBorder(worksheet, r, depth);
    }
    toString() {
        if (this.optionality === undefined) {
            return this.fieldReference.toString();
        }
        return `${this.fieldReference.toString()} ${this.optionality.toString()}`;
    }
}
exports.TypeFieldSpec = TypeFieldSpec;
//# sourceMappingURL=typeFieldSpec.js.map