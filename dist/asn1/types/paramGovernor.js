"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamGovernorFromObject = void 0;
const governor_1 = require("./governor");
function ParamGovernorFromObject(obj) {
    if (typeof obj === 'string') {
        return obj;
    }
    return governor_1.GovernorFromObject(obj);
}
exports.ParamGovernorFromObject = ParamGovernorFromObject;
//# sourceMappingURL=paramGovernor.js.map