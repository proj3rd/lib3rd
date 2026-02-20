"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectClassFieldType = void 0;
const lodash_1 = require("lodash");
const unimpl_1 = require("../../utils/unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const constants_1 = require("../constants");
const spreadsheet_2 = require("../formatter/spreadsheet");
const componentRelationConstraint_1 = require("./componentRelationConstraint");
const constraint_1 = require("./constraint");
const contentsConstraint_1 = require("./contentsConstraint");
const fixedTypeValueFieldSpec_1 = require("./fixedTypeValueFieldSpec");
const innerTypeConstraints_1 = require("./innerTypeConstraints");
const objectClassAssignment_1 = require("./objectClassAssignment");
const objectClassReference_1 = require("./objectClassReference");
const objectSet_1 = require("./objectSet");
const objectSetAssignment_1 = require("./objectSetAssignment");
const parameterizedTypeAssignment_1 = require("./parameterizedTypeAssignment");
const primitiveFieldName_1 = require("./primitiveFieldName");
const typeAssignment_1 = require("./typeAssignment");
const typeFieldSpec_1 = require("./typeFieldSpec");
const typeReference_1 = require("./typeReference");
const valueAssignment_1 = require("./valueAssignment");
const unimpl_2 = require("../../utils/unimpl");
/**
 * X.681 clause 14
 * ```
 * definedObjectClass.primitiveFieldName[0]....primitiveFieldName[n-1] ( constraint )
 * ```
 */
class ObjectClassFieldType {
    constructor(definedObjectClass, fieldName) {
        this.objectClassFieldType = true;
        this.definedObjectClass = definedObjectClass;
        this.fieldName = fieldName;
    }
    static fromObject(obj) {
        const { definedObjectClass: definedObjectClassObject, fieldName: fieldNameObject, constraint: constraintObject, reference: referenceObject, objectClassFieldType: objectClassFieldTypeTag, } = obj;
        if (!objectClassFieldTypeTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (!(fieldNameObject instanceof Array)) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (referenceObject && typeof referenceObject !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const definedObjectClass = objectClassReference_1.ObjectClassReference.fromObject(definedObjectClassObject);
        const fieldName = fieldNameObject.map((item) => primitiveFieldName_1.PrimitiveFieldName.fromObject(item));
        const constraint = constraintObject ? constraint_1.Constraint.fromObject(constraintObject) : undefined;
        const objectClassFieldType = new ObjectClassFieldType(definedObjectClass, fieldName);
        objectClassFieldType.constraint = constraint;
        objectClassFieldType.reference = referenceObject;
        return objectClassFieldType;
    }
    // eslint-disable-next-line no-unused-vars
    expand(modules, parameterMappings) {
        const assignment = modules.findAssignment(this.definedObjectClass.objectClassReference);
        if (assignment === undefined) {
            return this;
        }
        if (assignment instanceof typeAssignment_1.TypeAssignment) {
            return unimpl_1.unimpl();
        }
        if (assignment instanceof objectClassAssignment_1.ObjectClassAssignment) {
            if (this.fieldName.length !== 1) {
                return unimpl_1.unimpl();
            }
            const fieldName = this.fieldName[0];
            const { objectClass } = assignment;
            const { fieldSpecs } = objectClass;
            const fieldSpec = lodash_1.cloneDeep(fieldSpecs.find((fs) => fs.fieldReference.toString() === fieldName.toString()));
            if (fieldSpec === undefined) {
                return this;
            }
            if (fieldSpec instanceof typeFieldSpec_1.TypeFieldSpec) {
                const newTypeReference = new typeReference_1.TypeReference(fieldSpec.fieldReference.toString());
                newTypeReference.reference = this.toString();
                return newTypeReference;
            }
            if (fieldSpec instanceof fixedTypeValueFieldSpec_1.FixedTypeValueFieldSpec) {
                const expandedType = lodash_1.cloneDeep(lodash_1.cloneDeep(fieldSpec.asnType).expand(modules, []));
                if (lodash_1.isEqual(expandedType, fieldSpec.asnType)) {
                    fieldSpec.asnType.reference = this.toString();
                    return fieldSpec.asnType;
                }
                if (expandedType instanceof objectSet_1.ObjectSet) {
                    return unimpl_1.unimpl();
                }
                expandedType.reference = this.toString();
                return expandedType;
            }
            return unimpl_1.todo();
        }
        if (assignment instanceof objectSetAssignment_1.ObjectSetAssignment) {
            return unimpl_1.unimpl();
        }
        if (assignment instanceof parameterizedTypeAssignment_1.ParameterizedTypeAssignment) {
            return unimpl_1.unimpl();
        }
        if (assignment instanceof valueAssignment_1.ValueAssignment) {
            return unimpl_1.unimpl();
        }
        return unimpl_2.unreach();
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
            unimpl_1.unimpl();
        }
        else if (constraintSpec instanceof innerTypeConstraints_1.InnerTypeConstraints) {
            unimpl_1.unimpl();
        }
        else if (constraintSpec instanceof objectSet_1.ObjectSet) {
            unimpl_1.unimpl();
        }
        else if (constraintSpec instanceof componentRelationConstraint_1.ComponentRelationConstraint) {
            this.constraint = constraint;
        }
        else {
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
        const fieldNamesString = this.fieldName
            .map((primitiveFieldName) => primitiveFieldName.toString())
            .join('.');
        const outerString = `${this.definedObjectClass.toString()}.${fieldNamesString}`;
        if (this.constraint === undefined) {
            return outerString;
        }
        return `${outerString} ${this.constraint.toString()}`;
    }
}
exports.ObjectClassFieldType = ObjectClassFieldType;
//# sourceMappingURL=objectClassFieldType.js.map