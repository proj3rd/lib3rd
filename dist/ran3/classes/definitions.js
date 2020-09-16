"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spreadsheet_1 = require("../../common/spreadsheet");
class Definitions {
    constructor(definitionList) {
        this.definitionList = definitionList;
    }
    findDefinition(sectionNumberOrName) {
        const definition = this.definitionList.find((def) => {
            return (def.sectionNumber === sectionNumberOrName ||
                def.name === sectionNumberOrName);
        });
        return definition;
    }
    toSpreadsheet() {
        const wb = spreadsheet_1.getWorkbook();
        this.definitionList.forEach((def) => def.toSpreadsheet(wb));
        return wb;
    }
}
exports.Definitions = Definitions;
//# sourceMappingURL=definitions.js.map