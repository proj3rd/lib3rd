"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtypeElementsFromObject = void 0;
const sizeConstraint_1 = require("../classes/sizeConstraint");
const valueRange_1 = require("../classes/valueRange");
const constants_1 = require("../constants");
const singleValue_1 = require("./singleValue");
const typeConstraint_1 = require("./typeConstraint");
function SubtypeElementsFromObject(obj) {
    const { sizeConstraintTag } = obj;
    if (sizeConstraintTag) {
        return sizeConstraint_1.SizeConstraint.fromObject(obj);
    }
    try {
        return singleValue_1.SingleValueFromObject(obj);
    }
    catch (e) { }
    finally { }
    const { valueRangeTag } = obj;
    if (valueRangeTag) {
        return valueRange_1.ValueRange.fromObject(obj);
    }
    try {
        return typeConstraint_1.TypeConstraintFromObject(obj);
    }
    catch (e) { }
    finally { }
    throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
exports.SubtypeElementsFromObject = SubtypeElementsFromObject;
//# sourceMappingURL=subtypeElements.js.map