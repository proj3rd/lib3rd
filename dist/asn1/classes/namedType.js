"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spreadsheet_1 = require("../formatter/spreadsheet");
class NamedType {
    constructor(name, asnType) {
        this.name = name;
        this.asnType = asnType;
    }
    expand(modules, parameterMappings) {
        const expandedType = this.asnType.expand(modules, parameterMappings);
        if (expandedType !== undefined) {
            this.asnType = expandedType;
        }
        return this;
    }
    getDepth() {
        return this.asnType.getDepth();
    }
    toSpreadsheet(worksheet, row, depth) {
        this.asnType.toSpreadsheet(worksheet, {
            [spreadsheet_1.headerIndexed(spreadsheet_1.HEADER_NAME_BASE, depth)]: this.name,
        }, depth);
    }
    toString() {
        return `${this.name}    ${this.asnType.toString()}`;
    }
}
exports.NamedType = NamedType;
//# sourceMappingURL=namedType.js.map