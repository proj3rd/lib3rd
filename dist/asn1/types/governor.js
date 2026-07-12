"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GovernorFromObject = void 0;
const objectClassReference_1 = require("../classes/objectClassReference");
const asnType_1 = require("./asnType");
function GovernorFromObject(obj) {
    const { objectClassReferenceTag } = obj;
    if (objectClassReferenceTag) {
        return objectClassReference_1.ObjectClassReference.fromObject(obj);
    }
    return asnType_1.AsnTypeFromObject(obj);
}
exports.GovernorFromObject = GovernorFromObject;
//# sourceMappingURL=governor.js.map