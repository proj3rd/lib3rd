"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
function expand(msgIe, asn1Pool /* TODO */) {
    const msgIeClone = lodash_1.cloneDeep(msgIe);
    msgIeClone.definition.expand(asn1Pool, undefined, msgIeClone.definition.parameterList);
    return msgIeClone;
}
exports.expand = expand;
