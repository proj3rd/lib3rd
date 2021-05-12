"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    static deserialize(serialized) {
        return __awaiter(this, void 0, void 0, function* () {
            const { definitionList } = JSON.parse(serialized);
            if (!definitionList) {
                throw Error('Malformed RAN3 serialization');
            }
            if (!(definitionList instanceof Array)) {
                throw Error('Malformed RAN3 serialization');
            }
            const pass = definitionList.every((item) => validateDefinition(item));
            if (!pass) {
                throw Error('Malformed RAN3 serialization');
            }
            return new Definitions(definitionList);
        });
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