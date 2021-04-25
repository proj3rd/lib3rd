"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamedType = void 0;
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const spreadsheet_2 = require("../formatter/spreadsheet");
const objectSet_1 = require("./objectSet");
class NamedType {
    constructor(name, asnType) {
        this.name = name;
        this.asnType = asnType;
        if (asnType instanceof objectSet_1.ObjectSet) {
            return unimpl_1.unimpl('ObjectSet cannot be used in instantiating but expanding NamedType');
        }
    }
    /**
     * Expand `asnType` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules, parameterMappings) {
        const expandedType = lodash_1.cloneDeep(this.asnType).expand(modules, parameterMappings);
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
        }, depth);
    }
    toString() {
        return `${this.name}    ${this.asnType.toString()}`;
    }
}
exports.NamedType = NamedType;
//# sourceMappingURL=namedType.js.map