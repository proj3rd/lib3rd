"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntersectionsFromObject = void 0;
const constants_1 = require("../constants");
const intersectionElements_1 = require("./intersectionElements");
function IntersectionsFromObject(obj) {
    if (!(obj instanceof Array)) {
        throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const intersections = obj.map((item) => intersectionElements_1.IntersectionElementsFromObject(item));
    return intersections;
}
exports.IntersectionsFromObject = IntersectionsFromObject;
//# sourceMappingURL=intersections.js.map