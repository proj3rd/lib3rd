"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const extensionMarker_1 = require("./extensionMarker");
class SubtypeConstraint {
    constructor(elementSetSpecList) {
        this.elementSetSpecList = elementSetSpecList;
    }
    /**
     * Expand `elementSetSpecList` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules, parameterMappings) {
        const expandedElementSetSpecList = this.elementSetSpecList.map((elementSetSpec) => {
            if (elementSetSpec instanceof extensionMarker_1.ExtensionMarker) {
                return elementSetSpec;
            }
            const expandedElementSetSpec = lodash_1.cloneDeep(elementSetSpec).expand(modules, parameterMappings);
            if (lodash_1.isEqual(expandedElementSetSpec, elementSetSpec)) {
                return elementSetSpec;
            }
            return expandedElementSetSpec;
        });
        if (!lodash_1.isEqual(expandedElementSetSpecList, this.elementSetSpecList)) {
            this.elementSetSpecList = expandedElementSetSpecList;
        }
        return this;
    }
    toString() {
        return this.elementSetSpecList
            .map((elementSetSpec) => elementSetSpec.toString())
            .join(', ');
    }
}
exports.SubtypeConstraint = SubtypeConstraint;
//# sourceMappingURL=subtypeConstraint.js.map