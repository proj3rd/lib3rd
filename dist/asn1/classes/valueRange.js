"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueRange = void 0;
const lodash_1 = require("lodash");
const unimpl_1 = require("../../utils/unimpl");
const constants_1 = require("../constants");
const value_1 = require("../types/value");
const booleanValue_1 = require("./booleanValue");
const integerValue_1 = require("./integerValue");
const objectIdentifierValue_1 = require("./objectIdentifierValue");
const typeReference_1 = require("./typeReference");
const valueReference_1 = require("./valueReference");
class ValueRange {
    constructor(lower, upper) {
        this.valueRangeTag = true;
        this.lower = lower;
        this.upper = upper;
    }
    static fromObject(obj) {
        const { lower: lowerObject, upper: upperObject, valueRangeTag } = obj;
        if (!valueRangeTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const lower = value_1.ValueFromObject(lowerObject);
        const upper = value_1.ValueFromObject(upperObject);
        return new ValueRange(lower, upper);
    }
    /**
     * Expand `lower` and `upper` properties. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules, parameterMappings) {
        const expandedLower = this.expandValue(this.lower, modules, parameterMappings);
        if (!lodash_1.isEqual(expandedLower, this.lower)) {
            this.lower = expandedLower;
        }
        const expandedUpper = this.expandValue(this.upper, modules, parameterMappings);
        if (!lodash_1.isEqual(expandedUpper, this.upper)) {
            this.upper = expandedUpper;
        }
        return this;
    }
    // eslint-disable-next-line class-methods-use-this
    getDepth() {
        return 0;
    }
    toString() {
        return `${this.lower.toString()}..${this.upper.toString()}`;
    }
    // eslint-disable-next-line class-methods-use-this
    expandValue(value, modules, parameterMappings) {
        if (typeof value === 'string') {
            const parameterMapping = parameterMappings
                .find((paramMap) => paramMap.parameter.dummyReference === value);
            if (parameterMapping === undefined) {
                return value;
                // Necessary to get the actual value?
                // const assignment = modules.findAssignment(value);
                // if (assignment === undefined) {
                //   return value;
                // }
                // if (!(assignment instanceof ValueAssignment)) {
                //   return unimpl();
                // }
                // return assignment.value;
            }
            const { actualParameter } = parameterMapping;
            if (actualParameter === undefined) {
                return value;
                // Necessary to get the actual value?
                // const assignment = modules.findAssignment(value);
                // if (assignment === undefined) {
                //   return value;
                // }
                // if (!(assignment instanceof ValueAssignment)) {
                //   return unimpl();
                // }
                // return assignment.value;
            }
            if (typeof actualParameter === 'string') {
                return actualParameter;
            }
            if (actualParameter instanceof booleanValue_1.BooleanValue
                || actualParameter instanceof integerValue_1.IntegerValue
                || actualParameter instanceof objectIdentifierValue_1.ObjectIdentifierValue
                || typeof actualParameter === 'string') {
                return actualParameter;
                // Necessary to get the actual value?
            }
            if (actualParameter instanceof typeReference_1.TypeReference) {
                return new valueReference_1.ValueReference(actualParameter.typeReference);
            }
            // if (actualParameter instanceof ObjectClassReference) {
            //   return unimpl();
            // }
            // const expandedValue = cloneDeep(actualParameter).expand(modules, parameterMappings);
            // if (isEqual(expandedValue, value)) {
            //   return value;
            // }
            // if (
            //   expandedValue instanceof BooleanValue ||
            //   expandedValue instanceof IntegerValue ||
            //   expandedValue instanceof ObjectIdentifierValue ||
            //   typeof expandedValue === 'string'
            // ) {
            //   return expandedValue;
            // }
            return unimpl_1.unimpl();
        }
        const expandedValue = lodash_1.cloneDeep(value).expand(modules, parameterMappings);
        if (lodash_1.isEqual(expandedValue, value)) {
            return value;
        }
        return expandedValue;
    }
}
exports.ValueRange = ValueRange;
//# sourceMappingURL=valueRange.js.map