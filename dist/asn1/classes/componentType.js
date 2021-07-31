"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentType = void 0;
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const constants_1 = require("../constants");
const spreadsheet_2 = require("../formatter/spreadsheet");
const asnType_1 = require("../types/asnType");
const namedType_1 = require("./namedType");
const objectSet_1 = require("./objectSet");
const optionality_1 = require("./optionality");
const sequenceType_1 = require("./sequenceType");
class ComponentType {
    constructor(namedType, optionality, tag) {
        this.componentTypeTag = true;
        const { name, asnType } = namedType;
        this.name = name;
        this.asnType = asnType;
        this.optionality = optionality;
        this.tag = tag;
        if (asnType instanceof objectSet_1.ObjectSet) {
            return unimpl_1.unimpl('ObjectSet cannot be used in instantiating but expanding ComponentType');
        }
    }
    static fromObject(obj) {
        const { name, asnType: asnTypeObject, optionality: optionalityObject, tag, componentTypeTag, } = obj;
        if (!name || typeof name !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (typeof tag !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const asnType = asnType_1.AsnTypeFromObject(asnTypeObject);
        const namedType = new namedType_1.NamedType(name, asnType);
        const optionality = optionalityObject ? optionality_1.Optionality.fromObject(optionalityObject) : undefined;
        return new ComponentType(namedType, optionality, tag);
    }
    /**
     * Expand `asnType` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules, parameterMappings) {
        const expandedType = lodash_1.cloneDeep(this.asnType).expand(modules, parameterMappings);
        if (expandedType instanceof objectSet_1.ObjectSet) {
            return unimpl_1.unimpl();
        }
        if (!lodash_1.isEqual(expandedType, this.asnType)) {
            this.asnType = expandedType;
        }
        return this;
    }
    getDepth() {
        return this.asnType.getDepth();
    }
    toSpreadsheet(worksheet, row, depth) {
        this.asnType.toSpreadsheet(worksheet, {
            [spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, depth)]: this.name,
            [spreadsheet_2.HEADER_OPTIONAL]: this.optionality
                ? this.optionality.toString()
                : undefined,
            [spreadsheet_2.HEADER_TAG]: this.tag.toString(),
        }, depth);
    }
    /**
     * This method will return a string with a comma placeholder.
     * And it is discouraged to call `ComponentType.toString()` outside of
     * `SequenceType` and `ExtensionAdditionGroup`.
     */
    toString() {
        const arrToString = [this.name];
        if (this.optionality === undefined) {
            arrToString.push(`${this.asnType.toString()}${sequenceType_1.COMMA_PLACEHOLDER}`);
        }
        else if (this.optionality !== undefined) {
            arrToString.push(this.asnType.toString());
            arrToString.push(`${this.optionality.toString()}${sequenceType_1.COMMA_PLACEHOLDER}`);
        }
        if (this.tag.length > 0) {
            arrToString.push(this.tag);
        }
        return arrToString.join('    ');
    }
}
exports.ComponentType = ComponentType;
//# sourceMappingURL=componentType.js.map