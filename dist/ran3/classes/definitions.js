"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Definitions = void 0;
const spreadsheet_1 = require("../../common/spreadsheet");
const definition_1 = require("./definition");
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
        const { definitionList: definitionListObj } = obj;
        if (!definitionListObj) {
            throw Error('Malformed serialization of RAN3 tabular form');
        }
        if (!(definitionListObj instanceof Array)) {
            throw Error('Malformed serialization of RAN3 tabular form');
        }
        const definitionList = definitionListObj.map((definitionObj) => definition_1.Definition.fromObject(definitionObj));
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