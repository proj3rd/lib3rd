"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../formatter/spreadsheet");
const parameterizedTypeAssignment_1 = require("./parameterizedTypeAssignment");
const typeAssignment_1 = require("./typeAssignment");
const valueAssignment_1 = require("./valueAssignment");
class ExternalTypeReference {
    constructor(moduleReference, typeReference) {
        this.moduleReference = moduleReference;
        this.typeReference = typeReference;
    }
    expand(modules, parameterMappings) {
        const referencedAssignment = modules.findAssignment(this.typeReference, this.moduleReference);
        if (referencedAssignment === undefined) {
            return this;
        }
        else if (referencedAssignment instanceof typeAssignment_1.TypeAssignment) {
            const { asnType } = referencedAssignment;
            const expandedType = asnType.expand(modules, []);
            return expandedType;
        }
        else if (referencedAssignment instanceof parameterizedTypeAssignment_1.ParameterizedTypeAssignment) {
            return unimpl_1.unimpl();
        }
        else if (referencedAssignment instanceof valueAssignment_1.ValueAssignment) {
            return unimpl_1.unimpl();
        }
        throw Error();
    }
    getDepth() {
        return 0;
    }
    setConstraints(constraints) {
        if (constraints.length > 0) {
            unimpl_1.unimpl();
        }
    }
    toSpreadsheet(worksheet, row, depth) {
        row[spreadsheet_1.HEADER_REFERENCE] = this.toString();
        const r = worksheet.addRow(row);
        spreadsheet_1.drawBorder(worksheet, r, depth);
    }
    toString() {
        return `${this.moduleReference}.${this.typeReference}`;
    }
}
exports.ExternalTypeReference = ExternalTypeReference;
//# sourceMappingURL=externalTypeReference.js.map