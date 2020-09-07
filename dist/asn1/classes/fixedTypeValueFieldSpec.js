"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../formatter/spreadsheet");
const objectSet_1 = require("./objectSet");
class FixedTypeValueFieldSpec {
    constructor(fieldRerence, asnType, unique, optionality) {
        this.fieldReference = fieldRerence;
        this.asnType = asnType;
        this.unique = unique;
        this.optionality = optionality;
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
            [spreadsheet_1.headerIndexed(spreadsheet_1.HEADER_NAME_BASE, depth)]: this.fieldReference.toString(),
            [spreadsheet_1.HEADER_OPTIONAL]: this.optionality
                ? this.optionality.toString()
                : undefined,
            [spreadsheet_1.HEADER_UNIQUE]: this.unique ? 'UNIQUE' : undefined,
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