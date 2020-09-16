"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Definitions {
    constructor(definitionList) {
        this.definitionList = definitionList;
    }
    findDefinition(sectionNumberOrName) {
        const definition = this.definitionList.find((def) => {
            return def.sectionNumber === sectionNumberOrName || def.name === sectionNumberOrName;
        });
        return definition;
    }
}
exports.Definitions = Definitions;
//# sourceMappingURL=definitions.js.map