"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalTypeReference = void 0;
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const constants_1 = require("../constants");
const spreadsheet_2 = require("../formatter/spreadsheet");
const objectSet_1 = require("./objectSet");
const parameterizedTypeAssignment_1 = require("./parameterizedTypeAssignment");
const typeAssignment_1 = require("./typeAssignment");
const valueAssignment_1 = require("./valueAssignment");
class ExternalTypeReference {
    constructor(moduleReference, typeReference) {
        this.externalTypeReferenceTag = true;
        this.moduleReference = moduleReference;
        this.typeReference = typeReference;
    }
    static fromObject(obj) {
        const { moduleReference: moduleReferenceObject, typeReference: typeReferenceObject, externalTypeReferenceTag, } = obj;
        if (!externalTypeReferenceTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (!moduleReferenceObject || typeof moduleReferenceObject !== 'string'
            || !typeReferenceObject || typeof typeReferenceObject !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        return new ExternalTypeReference(moduleReferenceObject, typeReferenceObject);
    }
    /**
     * Find an Assignment indicated by ExternalTypeReference and
     * returns an expanded copy of it.
     * @param modules
     * @param parameterMappings
     */
    // eslint-disable-next-line no-unused-vars
    expand(modules, parameterMappings) {
        const referencedAssignment = modules.findAssignment(this.typeReference, this.moduleReference);
        if (referencedAssignment === undefined) {
            return this;
        }
        if (referencedAssignment instanceof typeAssignment_1.TypeAssignment) {
            const asnType = lodash_1.cloneDeep(referencedAssignment.asnType);
            const expandedType = lodash_1.cloneDeep(lodash_1.cloneDeep(asnType).expand(modules, []));
            if (asnType instanceof objectSet_1.ObjectSet) {
                return unimpl_1.unimpl();
            }
            if (lodash_1.isEqual(expandedType, asnType)) {
                asnType.reference = this.toString();
                return asnType;
            }
            if (expandedType instanceof objectSet_1.ObjectSet) {
                return unimpl_1.unimpl();
            }
            expandedType.reference = this.toString();
            return expandedType;
        }
        if (referencedAssignment instanceof parameterizedTypeAssignment_1.ParameterizedTypeAssignment) {
            return unimpl_1.unimpl();
        }
        if (referencedAssignment instanceof valueAssignment_1.ValueAssignment) {
            return unimpl_1.unimpl();
        }
        throw Error();
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
        // eslint-disable-next-line no-param-reassign
        row[spreadsheet_2.HEADER_REFERENCE] = this.toString();
        const r = worksheet.addRow(row);
        spreadsheet_1.setOutlineLevel(r, depth);
        spreadsheet_1.drawBorder(worksheet, r, depth);
    }
    toString() {
        return `${this.moduleReference}.${this.typeReference}`;
    }
}
exports.ExternalTypeReference = ExternalTypeReference;
//# sourceMappingURL=externalTypeReference.js.map