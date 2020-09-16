"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const spreadsheet_2 = require("../formatter/spreadsheet");
const objectSet_1 = require("./objectSet");
const sequenceType_1 = require("./sequenceType");
class ComponentType {
    constructor(namedType, optionality, tag) {
        const { name, asnType } = namedType;
        this.name = name;
        this.asnType = asnType;
        this.optionality = optionality;
        this.tag = tag;
        if (asnType instanceof objectSet_1.ObjectSet) {
            return unimpl_1.unimpl('ObjectSet cannot be used in instantiating but expanding ComponentType');
        }
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
            arrToString.push(`${this.asnType.toString()}${sequenceType_1._COMMA}`);
        }
        else if (this.optionality !== undefined) {
            arrToString.push(this.asnType.toString());
            arrToString.push(`${this.optionality.toString()}${sequenceType_1._COMMA}`);
        }
        if (this.tag.length > 0) {
            arrToString.push(this.tag);
        }
        return arrToString.join('    ');
    }
}
exports.ComponentType = ComponentType;
//# sourceMappingURL=componentType.js.map