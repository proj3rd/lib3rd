"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleDefinition = void 0;
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const formatter_1 = require("../formatter");
const valueAssignment_1 = require("./valueAssignment");
class ModuleDefinition {
    constructor(name, definitiveIdentification, tagDefault, extensionDefault, moduleBody) {
        this.name = name;
        this.definitiveIdentification = definitiveIdentification;
        this.tagDefault = tagDefault;
        this.extensionDefault = extensionDefault;
        const { exports, imports, assignments } = moduleBody;
        this.exports = exports;
        this.imports = imports;
        this.assignments = assignments;
    }
    findAssignment(name) {
        return this.assignments.find((assignment) => assignment.name === name);
    }
    toSpreadsheet(workbook) {
        const wb = spreadsheet_1.getWorkbook(workbook);
        this.assignments.forEach((assignment) => {
            if (assignment instanceof valueAssignment_1.ValueAssignment) {
                return;
            }
            assignment.toSpreadsheet(wb);
        });
        return wb;
    }
    toString() {
        const headerString = [
            this.name,
            this.definitiveIdentification.toString(),
            `DEFINITIONS ${this.tagDefault} ${this.extensionDefault} ::=`,
            'BEGIN',
        ].join('\n');
        const arrToString = [headerString];
        if (this.exports !== null) {
            return unimpl_1.unimpl();
        }
        if (this.imports !== null) {
            arrToString.push(formatter_1.indent(this.imports.toString()));
        }
        const assignmentsString = this.assignments
            .map((assignment) => assignment.toString())
            .join('\n\n');
        arrToString.push(formatter_1.indent(assignmentsString));
        arrToString.push('END');
        return arrToString.join('\n\n');
    }
}
exports.ModuleDefinition = ModuleDefinition;
//# sourceMappingURL=moduleDefinition.js.map