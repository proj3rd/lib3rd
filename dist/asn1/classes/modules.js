"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
class Modules {
    constructor(modules = []) {
        this.modules = modules;
    }
    findAssignment(name, moduleName) {
        let assignment;
        if (moduleName !== undefined) {
            return unimpl_1.unimpl();
        }
        this.modules.forEach((module) => {
            if (assignment !== undefined) {
                return;
            }
            assignment = module.findAssignment(name);
        });
        return assignment;
    }
    toSpreadsheet() {
        const workbook = spreadsheet_1.getWorkbook();
        this.modules.forEach((module) => module.toSpreadsheet(workbook));
        return workbook;
    }
    toString() {
        return this.modules.map((module) => module.toString()).join('\n\n');
    }
}
exports.Modules = Modules;
//# sourceMappingURL=modules.js.map