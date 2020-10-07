"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const formatter_1 = require("../formatter");
const extensionMarker_1 = require("./extensionMarker");
class SizeConstraint {
    constructor(constraint) {
        this.constraint = constraint;
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