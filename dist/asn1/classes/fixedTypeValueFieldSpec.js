"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedTypeValueFieldSpec = void 0;
const lodash_1 = require("lodash");
const unimpl_1 = require("../../utils/unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const constants_1 = require("../constants");
const spreadsheet_2 = require("../formatter/spreadsheet");
const asnType_1 = require("../types/asnType");
const objectSet_1 = require("./objectSet");
const optionality_1 = require("./optionality");
const primitiveFieldName_1 = require("./primitiveFieldName");
class FixedTypeValueFieldSpec {
    constructor(fieldRerence, asnType, unique, optionality) {
        this.fixedTypeValueFieldSpecTag = true;
        this.fieldReference = fieldRerence;
        this.asnType = asnType;
        this.unique = unique;
        this.optionality = optionality;
    }
    static fromObject(obj) {
        const { fieldReference: fieldReferenceObj, asnType: asnTypeObj, unique: uniqueObj, optionality: optionalityObj, fixedTypeValueFieldSpecTag, } = obj;
        const fieldReference = primitiveFieldName_1.PrimitiveFieldName.fromObject(fieldReferenceObj);
        const asnType = asnType_1.AsnTypeFromObject(asnTypeObj);
        if (typeof uniqueObj !== 'boolean') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const optionality = optionalityObj !== undefined ? optionality_1.Optionality.fromObject(optionalityObj) : undefined;
        return new FixedTypeValueFieldSpec(fieldReference, asnType, uniqueObj, optionality);
    }
    /**
     * Expand `asnType` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules, parameterMappings) {
        if (parameterMappings.length) {
            return unimpl_1.unimpl();
        }
        const expandedType = lodash_1.cloneDeep(this.asnType).expand(modules, parameterMappings);
        if (expandedType instanceof objectSet_1.ObjectSet) {
            return unimpl_1.unimpl();
        }
        if (!lodash_1.isEqual(expandedType, this.asnType)) {
            this.asnType = expandedType;
        }
        // TODO: Shall `optionality` be expanded?
        return this;
    }
    getDepth() {
        return this.asnType.getDepth();
    }
    toSpreadsheet(worksheet, row, depth) {
        this.asnType.toSpreadsheet(worksheet, {
            [spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, depth)]: this.fieldReference.toString(),
            [spreadsheet_2.HEADER_OPTIONAL]: this.optionality
                ? this.optionality.toString()
                : undefined,
            [spreadsheet_2.HEADER_UNIQUE]: this.unique ? 'UNIQUE' : undefined,
        }, depth);
    }
    toString() {
        const arrToString = [
            this.fieldReference.toString(),
            this.asnType.toString(),
        ];
        if (this.unique) {
            arrToString.push('UNIQUE');
        }
        if (this.optionality !== undefined) {
            arrToString.push(this.optionality.toString());
        }
        return arrToString.join(' ');
    }
}
exports.FixedTypeValueFieldSpec = FixedTypeValueFieldSpec;
//# sourceMappingURL=fixedTypeValueFieldSpec.js.map