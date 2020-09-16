"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditions_1 = require("./conditions");
const rangeBounds_1 = require("./rangeBounds");
class Definition {
    constructor(definition) {
        const { sectionNumber, name, descriptionList, direction, elementList, rangeBoundList, conditionList } = definition;
        this.sectionNumber = sectionNumber;
        this.name = name;
        this.descriptionList = descriptionList;
        this.direction = direction;
        this.elementList = elementList;
        this.rangeBounds = new rangeBounds_1.RangeBounds(rangeBoundList);
        this.conditions = new conditions_1.Conditions(conditionList);
    }
}
exports.Definition = Definition;
//# sourceMappingURL=definition.js.map