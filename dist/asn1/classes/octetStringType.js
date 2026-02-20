"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OctetStringType = void 0;
const unimpl_1 = require("../../utils/unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const sizeConstraint_1 = require("./sizeConstraint");
const spreadsheet_2 = require("../formatter/spreadsheet");
const componentRelationConstraint_1 = require("./componentRelationConstraint");
const constraint_1 = require("./constraint");
const contentsConstraint_1 = require("./contentsConstraint");
const extensionMarker_1 = require("./extensionMarker");
const innerTypeConstraints_1 = require("./innerTypeConstraints");
const objectSet_1 = require("./objectSet");
const constants_1 = require("../constants");
class OctetStringType {
    constructor() {
        this.octetStringTypeTag = true;
    }
    static fromObject(obj) {
        const { constraint: constraintObject, reference: referenceObject, octetStringTypeTag, } = obj;
        if (!octetStringTypeTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const constraint = constraintObject ? constraint_1.Constraint.fromObject(constraintObject) : undefined;
        if (referenceObject && typeof referenceObject !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const octetStringType = new OctetStringType();
        octetStringType.constraint = constraint;
        octetStringType.reference = referenceObject;
        return octetStringType;
    }
    expand(modules, parameterMappings) {
        if (parameterMappings.length) {
            return unimpl_1.unimpl(this, parameterMappings);
        }
        return this;
    }
    // eslint-disable-next-line class-methods-use-this
    getDepth() {
        return 0;
    }
    setConstraints(constraints) {
        if (constraints.length === 0) {
            return;
        }
        if (constraints.length > 1) {
            unimpl_1.unimpl();
        }
        const constraint = constraints[0];
        const { constraintSpec } = constraint;
        if (constraintSpec instanceof contentsConstraint_1.ContentsConstraint) {
            this.constraint = constraint;
        }
        else if (constraintSpec instanceof innerTypeConstraints_1.InnerTypeConstraints) {
            unimpl_1.unimpl();
        }
        else if (constraintSpec instanceof objectSet_1.ObjectSet) {
            unimpl_1.unimpl();
        }
        else if (constraintSpec instanceof componentRelationConstraint_1.ComponentRelationConstraint) {
            unimpl_1.unimpl();
        }
        else {
            if (constraintSpec.elementSetSpecList.length !== 1) {
                unimpl_1.unimpl();
            }
            const elementSetSpec = constraintSpec.elementSetSpecList[0];
            if (elementSetSpec instanceof extensionMarker_1.ExtensionMarker) {
                throw Error('Not implemented');
            }
            if (elementSetSpec.intersectionsList.length > 1) {
                unimpl_1.unimpl();
            }
            const intersections = elementSetSpec.intersectionsList[0];
            if (intersections.length !== 1) {
                unimpl_1.unimpl();
            }
            const intersectionElements = intersections[0];
            if (intersectionElements instanceof sizeConstraint_1.SizeConstraint) {
                this.constraint = constraint;
            }
            else {
                unimpl_1.unimpl();
            }
        }
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
        if (this.constraint === undefined) {
            return 'OCTET STRING';
        }
        return `OCTET STRING ${this.constraint.toString()}`;
    }
}
exports.OctetStringType = OctetStringType;
//# sourceMappingURL=octetStringType.js.map