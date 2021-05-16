"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtypeConstraint = void 0;
const lodash_1 = require("lodash");
const constants_1 = require("../constants");
const extensionMarker_1 = require("./extensionMarker");
const unions_1 = require("./unions");
class SubtypeConstraint {
    constructor(elementSetSpecList) {
        this.subtypeConstraintTag = true;
        this.elementSetSpecList = elementSetSpecList;
    }
    static fromObject(obj) {
        const { elementSetSpecList: elementSetSpecListObject, subtypeConstraintTag } = obj;
        if (!subtypeConstraintTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (!(elementSetSpecListObject instanceof Array)) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const elementSetSpecList = elementSetSpecListObject.map((item) => {
            const { unionsTag } = item;
            if (unionsTag) {
                return unions_1.Unions.fromObject(item);
            }
            const { extensionMarkerTag } = item;
            if (extensionMarkerTag) {
                return extensionMarker_1.ExtensionMarker.getInstance();
            }
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        });
        return new SubtypeConstraint(elementSetSpecList);
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