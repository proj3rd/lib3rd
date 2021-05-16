"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Definitions = void 0;
const spreadsheet_1 = require("../../common/spreadsheet");
function validateDefinition(item) {
    const { sectionNumber, name, elementList, rangeBounds, conditions } = item;
    if (!sectionNumber || typeof sectionNumber !== 'string') {
        return false;
    }
    if (!name || typeof name !== 'string') {
        return false;
    }
    if (!(elementList instanceof Array)) {
        return false;
    }
    // TODO: Need to validate elementList, rangeBounds and conditions?
    return true;
}
class Definitions {
    constructor(definitionList) {
        this.definitionList = definitionList;
    }
    static fromObject(obj) {
        const { definitionList } = obj;
        if (!definitionList) {
            throw Error('Malformed serialization of RAN3 tabular form');
        }
        if (!(definitionList instanceof Array)) {
            throw Error('Malformed serialization of RAN3 tabular form');
        }
        const pass = definitionList.every((item) => validateDefinition(item));
        if (!pass) {
            throw Error('Malformed serialization of RAN3 tabular form');
        }
        return new Definitions(definitionList);
    }
    findDefinition(sectionNumberOrName) {
        const definition = this.definitionList.find((def) => (def.sectionNumber === sectionNumberOrName
            || def.name === sectionNumberOrName));
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