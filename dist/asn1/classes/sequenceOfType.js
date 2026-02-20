"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequenceOfType = void 0;
const lodash_1 = require("lodash");
const unimpl_1 = require("../../utils/unimpl");
const spreadsheet_1 = require("../formatter/spreadsheet");
const spreadsheet_2 = require("../../common/spreadsheet");
const constraint_1 = require("./constraint");
const namedType_1 = require("./namedType");
const objectSet_1 = require("./objectSet");
const asnType_1 = require("../types/asnType");
const constants_1 = require("../constants");
const nullType_1 = require("./nullType");
class SequenceOfType {
    constructor(baseType, constraint) {
        this.sequenceOfTypeTag = true;
        this.baseType = baseType;
        this.constraint = constraint;
    }
    static fromObject(obj) {
        const { baseType: baseTypeObj, constraint: constraintObj, reference: referenceObj, sequenceOfTypeTag, } = obj;
        if (!sequenceOfTypeTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        let baseType = undefined;
        try {
            baseType = asnType_1.AsnTypeFromObject(baseTypeObj);
        }
        catch (e) { }
        finally { }
        const { namedTypeTag } = baseTypeObj;
        if (namedTypeTag) {
            baseType = namedType_1.NamedType.fromObject(baseTypeObj);
        }
        const { objectSetTag } = baseTypeObj;
        if (objectSetTag) {
            baseType = objectSet_1.ObjectSet.fromObject(baseTypeObj);
        }
        if (baseType === undefined) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const constraint = constraintObj !== undefined ? constraint_1.Constraint.fromObject(constraintObj) : undefined;
        if (referenceObj && typeof referenceObj !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const sequenceOfType = new SequenceOfType(new nullType_1.NullType(), constraint); // new NullType() is WA
        sequenceOfType.baseType = baseType;
        sequenceOfType.reference = referenceObj;
        return sequenceOfType;
    }
    /**
     * Expand `baseType` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules, parameterMappings) {
        const expandedBaseType = lodash_1.cloneDeep(this.baseType).expand(modules, parameterMappings);
        if (!lodash_1.isEqual(expandedBaseType, this.baseType)) {
            this.baseType = expandedBaseType;
        }
        if (this.constraint !== undefined) {
            const expandedConstraint = lodash_1.cloneDeep(this.constraint).expand(modules, parameterMappings);
            if (!lodash_1.isEqual(expandedConstraint, this.constraint)) {
                this.constraint = expandedConstraint;
            }
        }
        return this;
    }
    getDepth() {
        return this.baseType.getDepth() + 1;
    }
    // eslint-disable-next-line class-methods-use-this
    setConstraints(constraints) {
        if (constraints.length > 0) {
            unimpl_1.unimpl();
        }
    }
    toSpreadsheet(worksheet, row, depth) {
        var _a;
        spreadsheet_1.appendInColumn(row, spreadsheet_1.HEADER_TYPE, this.stringPrefix());
        if (!(this.baseType instanceof namedType_1.NamedType) && this.baseType.reference) {
            spreadsheet_1.appendInColumn(row, spreadsheet_1.HEADER_TYPE, this.baseType.reference);
        }
        const r = worksheet.addRow(row);
        spreadsheet_2.setOutlineLevel(r, depth);
        spreadsheet_2.drawBorder(worksheet, r, depth);
        const name = this.baseType instanceof namedType_1.NamedType
            ? 'item'
            : (_a = this.baseType.reference) !== null && _a !== void 0 ? _a : 'item';
        this.baseType.toSpreadsheet(worksheet, {
            [spreadsheet_2.headerIndexed(spreadsheet_1.HEADER_NAME_BASE, depth + 1)]: name,
        }, depth + 1);
    }
    toString() {
        return `${this.stringPrefix()} ${this.baseType.toString()}`;
    }
    stringPrefix() {
        if (this.constraint === undefined) {
            return 'SEQUENCE OF';
        }
        return `SEQUENCE ${this.constraint.toString()} OF`;
    }
}
exports.SequenceOfType = SequenceOfType;
//# sourceMappingURL=sequenceOfType.js.map