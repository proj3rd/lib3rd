"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
const ValueReference_1 = require("./ValueReference");
class IntegerValue {
    constructor(literal) {
        this.literal = literal;
        const value = +literal;
        if (Number.isNaN(value)) {
            this.value = new ValueReference_1.ValueReference(literal);
        }
        else {
            this.value = value;
        }
    }
    expand(modules, parameterMappings) {
        const { value } = this;
        if (value instanceof ValueReference_1.ValueReference) {
            const parameterMapping = parameterMappings.find((paramMap) => {
                return paramMap.parameter.dummyReference === value.valueReference;
            });
            if (parameterMapping === undefined) {
                return this;
            }
            else {
                if (parameterMapping.actualParameter === undefined) {
                    return this;
                }
                else {
                    return unimpl_1.todo();
                }
            }
        }
        return this;
    }
    getDepth() {
        return 0;
    }
    toString() {
        return this.literal;
    }
}
exports.IntegerValue = IntegerValue;
//# sourceMappingURL=integerValue.js.map