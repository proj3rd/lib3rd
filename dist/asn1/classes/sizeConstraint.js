"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeConstraint = void 0;
const lodash_1 = require("lodash");
const constants_1 = require("../constants");
const formatter_1 = require("../formatter");
const extensionMarker_1 = require("./extensionMarker");
const integerValue_1 = require("./integerValue");
const valueRange_1 = require("./valueRange");
class SizeConstraint {
    constructor(constraint) {
        this.sizeConstraintTag = true;
        this.constraint = constraint;
    }
    static fromObject(obj) {
        const { constraint: constraintObject, sizeConstraintTag } = obj;
        if (!sizeConstraintTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (!(constraintObject instanceof Array)) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const constraint = constraintObject.map((item) => {
            const { extensionMarkerTag } = item;
            if (extensionMarkerTag) {
                return extensionMarker_1.ExtensionMarker.getInstance();
            }
            const { integerValueTag } = item;
            if (integerValueTag) {
                return integerValue_1.IntegerValue.fromObject(item);
            }
            const { valueRangeTag } = item;
            if (valueRangeTag) {
                return valueRange_1.ValueRange.fromObject(item);
            }
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        });
        return new SizeConstraint(constraint);
    }
    /**
     * Expand `constraint` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules, parameterMappings) {
        const expandedConstarint = this.constraint.map((con) => {
            if (con instanceof extensionMarker_1.ExtensionMarker) {
                return con;
            }
            const expandedCon = lodash_1.cloneDeep(con).expand(modules, parameterMappings);
            if (lodash_1.isEqual(expandedCon, con)) {
                return con;
            }
            return expandedCon;
        });
        if (!lodash_1.isEqual(expandedConstarint, this.constraint)) {
            this.constraint = expandedConstarint;
        }
        return this;
    }
    // eslint-disable-next-line class-methods-use-this
    getDepth() {
        return 0;
    }
    toString() {
        return `SIZE ${formatter_1.getPermittedIntegerValues(this.constraint)}`;
    }
}
exports.SizeConstraint = SizeConstraint;
//# sourceMappingURL=sizeConstraint.js.map