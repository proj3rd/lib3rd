"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
function expand(msgIe, asn1Pool) {
    const msgIeClone = lodash_1.cloneDeep(msgIe);
    const expandedDefinition = msgIeClone.definition.expand(asn1Pool, undefined, msgIeClone.definition.parameterList);
    msgIeClone.definition = expandedDefinition;
    return msgIeClone;
}
exports.expand = expand;
