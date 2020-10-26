"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spreadsheet_1 = require("../../common/spreadsheet");
class Modules {
    constructor(modules = []) {
        this.modules = modules;
    }
    findAssignment(name, moduleName) {
        let assignment;
        this.modules.filter((module) => {
            if (moduleName === undefined) {
                return true;
            }
            return module.name === moduleName;
        }).forEach((module) => {
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