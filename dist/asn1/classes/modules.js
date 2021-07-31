"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modules = void 0;
const spreadsheet_1 = require("../../common/spreadsheet");
const constants_1 = require("../constants");
const moduleDefinition_1 = require("./moduleDefinition");
class Modules {
    constructor(modules = []) {
        this.modulesTag = true;
        this.modules = modules;
    }
    static fromObject(obj) {
        const { modules: moduleObjectList, modulesTag } = obj;
        if (!modulesTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (!(moduleObjectList instanceof Array)) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const modules = moduleObjectList.map((moduleObject) => {
            return moduleDefinition_1.ModuleDefinition.fromObject(moduleObject);
        });
        return new Modules(modules);
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